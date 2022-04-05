import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'

import { ProductsExplorer } from '~/contents'
import { graphcmsClient } from '~/lib'

type LoaderData = {
  products: any[]
  productsConnection: any
  categories: any[]
  collections: any[]
}

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
      query SearchProducts($first: Int!, $skip: Int!, $searchQuery: String!) {
        products(
          first: $first
          skip: $skip
          where: { OR: [{ name_contains: $searchQuery }] }
        ) {
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
      .query(searchProductsQuery, {
        first,
        skip,
        searchQuery,
      })
      .toPromise()

    const { products, productsConnection, categories, collections } =
      response.data

    return json({
      products,
      productsConnection,
      categories,
      collections,
    })
  } 
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
      .query(allProductsQuery, {
        first,
        skip,
      })
      .toPromise()
    const { products, productsConnection, categories, collections } =
      response.data

    return json({
      products,
      productsConnection,
      categories,
      collections,
    })
  
}

export default function Products() {
  const { products, productsConnection, categories, collections } =
    useLoaderData<LoaderData>()

  return (
    <ProductsExplorer
        products={products}
        productsConnection={productsConnection}
        categories={categories}
        collections={collections}
      />
  )
}
