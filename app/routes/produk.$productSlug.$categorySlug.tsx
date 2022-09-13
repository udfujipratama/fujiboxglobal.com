import { gql } from '@urql/core'
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ProductDetail } from '~/contents'
import { QUERY_ONE_PRODUCT_BY_SLUG } from '~/graphql'
import { graphcmsClient, SEOHandle } from '~/lib'
import { Product } from '~/types'

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const allProductsQuery = gql`
      query AllProducts {
        products(orderBy: updatedAt_DESC) {
          slug
        }
      }
    `
    const response = await graphcmsClient.query(allProductsQuery).toPromise()
    const { products } = response.data

    return products.map((product: Product) => {
      return { route: `/produk/${product.slug}`, priority: 0.8 }
    })
  },
}

// @ts-ignore
export const meta: MetaFunction = ({ data }) => {
  const { product } = data

  if (!product) {
    return {
      title: `Produk tidak ditemukan - Produk - Fujibox`,
      description: 'Maaf produk tidak ditemukan di halaman ini.',
    }
  }
  const text: string = product?.description?.text
  const description = text.split('\\n').join(' ')

  return {
    title: `${product?.name} - Produk - Fujibox`,
    description,
    'og:image': product?.images[0]?.url || '/images/logo/fujibox-logo.png',
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug, categorySlug } = params

  const response = await graphcmsClient
    .query(QUERY_ONE_PRODUCT_BY_SLUG, {
      productSlug,
      categorySlug,
    })
    .toPromise()

  const { product, category } = response.data

  return json({ product, category })
}

export default function ProductSlug() {
  const { product, category } = useLoaderData()

  return <ProductDetail product={product} products={category.products} />
}
