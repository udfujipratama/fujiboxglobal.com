import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { CardsList } from '~/components'
import { graphcmsClient } from '~/lib'
import { ProductsExplorer } from '~/contents'

export const loader: LoaderFunction = async () => {
  const allProductsCategoriesCollectionsQuery = gql`
    query AllProductsCategoriesCollections {
      products {
        id
        slug
        name
        description
        width
        height
        length
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
