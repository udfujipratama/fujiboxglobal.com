import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'

import { graphcmsClient } from '~/lib'
import { ProductsExplorer } from '~/contents'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const searchQuery = url.searchParams.get('q')

  if (searchQuery) {
    const searchProductsQuery = gql`
      query SearchProducts($name: String) {
        products(where: { name: $slug }) {
          id
          slug
          name
          images {
            url
          }
          categories {
            name
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

    const response = await graphcmsClient.query(searchProductsQuery).toPromise()
    const { products, categories, collections } = response.data

    return json({
      products,
      categories,
      collections,
    })
  } else {
    const allProductsQuery = gql`
      query AllProducts {
        products {
          id
          slug
          name
          images {
            url
          }
          categories {
            name
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

    const response = await graphcmsClient.query(allProductsQuery).toPromise()
    const { products, categories, collections } = response.data

    return json({
      products,
      categories,
      collections,
    })
  }
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
