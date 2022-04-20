import { gql } from '@urql/core'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { ProductDetail } from '~/contents'
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
  const oneProductBySlugQuery = gql`
    query OneProductBySlug($productSlug: String!, $categorySlug: String!) {
      product(where: { slug: $productSlug }) {
        id
        name
        slug
        material
        height
        length
        width
        description {
          html
          text
        }
        images {
          id
          url
        }
        categories {
          id
          name
          slug
        }
        collections(first: 1) {
          id
          name
          slug
        }
      }
      # this query for recommended-products
      category(where: { slug: $categorySlug }) {
        id
        name
        image {
          url
        }
        products(first: 5) {
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
          collections(first: 1) {
            id
            name
            slug
          }
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(oneProductBySlugQuery, {
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
