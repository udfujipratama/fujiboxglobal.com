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
  const categoryOrCollectionquery =
    url.searchParams.get('kategori') || url.searchParams.get('koleksi')

  // Logic for the pagination
  const pageQuery = Number(url.searchParams.get('page'))
  const itemsPerPage = 10

  const first = itemsPerPage
  const skip = pageQuery > 1 ? itemsPerPage * pageQuery - itemsPerPage : 0

  // Logic for the search data
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
          collections {
            id
            name
            slug
          }
          soldOut
        }
        productsConnection(where: { OR: [{ name_contains: $searchQuery }] }) {
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

  // get all data by category or collection
  if (categoryOrCollectionquery) {
    const categorysOrcollectionsQuery = gql`
      query CategoriesOrCollections($first: Int!, $skip: Int!, $slug: String!) {
        products(
          where: {
            OR: [
              { collections_some: { slug: $slug } }
              { categories_some: { slug: $slug } }
            ]
          }
          orderBy: updatedAt_DESC
          first: $first
          skip: $skip
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
          collections(first: 1) {
            id
            name
            slug
          }
          soldOut
        }
        productsConnection(
          where: {
            OR: [
              { collections_some: { slug: $slug } }
              { categories_some: { slug: $slug } }
            ]
          }
        ) {
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
      .query(categorysOrcollectionsQuery, {
        first,
        skip,
        slug: categoryOrCollectionquery,
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

  const allProductsquery = gql`
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
        soldOut
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
    .query(allProductsquery, {
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
