import { gql } from '@urql/core'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { ProductsExplorer } from '~/contents'
import { graphcmsClient, SEOHandle } from '~/lib'
import { Categories, Collections, Connection, Products } from '~/types'

type LoaderData = {
  products: Products
  productsConnection: Connection
  categories: Categories
  collections: Collections
}

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/produk`, priority: 0.9 }]
  },
}

export const meta: MetaFunction = () => {
  return {
    title: 'Semua produk Fujibox',
    description: 'Cari produk Fujibox yang Anda butuhkan di sini.',
  }
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
          orderBy: updatedAt_DESC
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
            slug
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
      products(orderBy: updatedAt_DESC, first: $first, skip: $skip) {
        id
        slug
        name
        images(first: 1) {
          url
        }
        categories(first: 1) {
          name
          slug
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

export default function ProductPage() {
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
