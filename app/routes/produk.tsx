import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'

import { graphcmsClient } from '~/lib'
import { ProductsExplorer } from '~/contents'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const searchQuery = url.searchParams.get('q')

  // Logic for the pagination
  const pageQuery = Number(url.searchParams.get('page'))
  const itemsPerPage = 10

  const first = itemsPerPage
  const skip = pageQuery > 1 ? itemsPerPage * pageQuery - itemsPerPage : 0

  // Logic for the data fetching whether filter or get all data
  if (searchQuery) {
    const searchProductsQuery = gql`
      query SearchProducts($searchQuery: String!) {
        products(where: { OR: [{ name_contains: $searchQuery }] }) {
          id
          slug
          name
          images(first: 1) {
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

    const response = await graphcmsClient
      .query(searchProductsQuery, {
        searchQuery,
      })
      .toPromise()

    const { products, categories, collections } = response.data

    return json({
      products,
      categories,
      collections,
    })
  } else {
    const allProductsQuery = gql`
      query AllProducts($first: Int!, $skip: Int!) {
        products(first: $first, skip: $skip) {
          id
          slug
          name
          images(first: 1) {
            url
          }
          categories(first: 1) {
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

    const response = await graphcmsClient
      .query(allProductsQuery, {
        first,
        skip,
      })
      .toPromise()
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
