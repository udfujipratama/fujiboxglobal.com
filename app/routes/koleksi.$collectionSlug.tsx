import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'

import { ProductsExplorer } from '~/contents'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { collectionSlug } = params

  const oneCollectionBySlugQuery = gql`
    query oneCollectionBySlug($slug: String!) {
      collection(where: { slug: $slug }) {
        id
        name
        image {
          url
        }
        products {
          id
          name
          slug
          material
          height
          length
          width
          images {
            url
          }
          categories {
            name
          }
        }
      }
      productsConnection {
        aggregate {
          count
        }
      }
      categories {
        id
        slug
        name
      }
      collections {
        id
        slug
        name
      }
    }
  `
  const response = await graphcmsClient
    .query(oneCollectionBySlugQuery, { slug: collectionSlug })
    .toPromise()

  const { collection, productsConnection, categories, collections } =
    response.data

  return json({
    collection,
    productsConnection,
    categories,
    collections,
  })
}

export default function CollectionSlug() {
  const { collection, productsConnection, categories, collections } =
    useLoaderData()

  return (
    <ProductsExplorer
      products={collection.products}
      productsConnection={productsConnection}
      categories={categories}
      collections={collections}
    />
  )
}
