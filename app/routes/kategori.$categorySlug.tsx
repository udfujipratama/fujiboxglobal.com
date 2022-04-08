import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'

import { ProductsExplorer } from '~/contents'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { categorySlug } = params

  const oneCategoryBySlugQuery = gql`
    query oneCategoryBySlug($slug: String!) {
      category(where: { slug: $slug }) {
        id
        name
        image {
          url
        }
        products {
          id
          name
          slug
          images(first: 1) {
            url
          }
          categories(first: 1) {
            name
            slug
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
    .query(oneCategoryBySlugQuery, { slug: categorySlug })
    .toPromise()

  const { category, productsConnection, categories, collections } =
    response.data

  return json({
    category,
    productsConnection,
    categories,
    collections,
  })
}

export default function CategorySlug() {
  const { category, productsConnection, categories, collections } =
    useLoaderData()

  return (
    <ProductsExplorer
      products={category.products}
      productsConnection={productsConnection}
      categories={categories}
      collections={collections}
    />
  )
}
