import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { ProductsExplorer } from '~/contents'
import {
  QUERY_SEARCH_PRODUCTS,
  QUERY_CATEGORY_OR_COLLECTION,
  QUERY_ALL_PRODUCT,
} from '~/graphql'
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
    const response = await graphcmsClient
      .query(QUERY_SEARCH_PRODUCTS, { first, skip, searchQuery })
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
    const response = await graphcmsClient
      .query(QUERY_CATEGORY_OR_COLLECTION, {
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

  const response = await graphcmsClient
    .query(QUERY_ALL_PRODUCT, {
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
