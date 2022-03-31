import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'

import { graphcmsClient } from '~/lib'
import { ProductsExplorer } from '~/contents'

export const loader: LoaderFunction = async () => {
  const allProductsCategoriesCollectionsQuery = gql`
    query AllProductsCategoriesCollections {
      products {
        id
        slug
        name
        images {
          url
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
    .query(allProductsCategoriesCollectionsQuery)
    .toPromise()
  const { products, categories, collections } = response.data

  return json({
    products,
    categories,
    collections,
  })
}

export default function Products() {
  const { products, categories, collections } = useLoaderData()

  return (
    <>
      <ProductsExplorer
        products={products}
        categories={categories}
        collections={collections}
      />
    </>
  )
}
