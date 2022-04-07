import { gql } from '@urql/core'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { ProductDetail } from '~/contents'
import { graphcmsClient, SEOHandle } from '~/lib'

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

    return products.map((product: any) => {
      return { route: `/produk/${product.slug}`, priority: 0.8 }
    })
  },
}

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug } = params
  const oneProductBySlugQuery = gql`
    query OneProductBySlug($slug: String!) {
      product(where: { slug: $slug }) {
        id
        name
        slug
        material
        height
        length
        width
        description {
          html
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
        collections {
          id
          name
          slug
        }
      }

      products(first: 5) {
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
    }
  `
  const response = await graphcmsClient
    .query(oneProductBySlugQuery, { slug: productSlug })
    .toPromise()

  const { product, products } = response.data

  return json({ product, products })
}

export const meta: MetaFunction = () => {
  return {
    title: 'Semua produk Fujibox',
    description: 'Cari produk Fujibox yang Anda butuhkan di sini.',
    // 'og:image': product.images[0].url,
    // 'og:image:alt': '',
  }
}

export default function ProductSlug() {
  const { product, products } = useLoaderData()

  return <ProductDetail product={product} products={products} />
}
