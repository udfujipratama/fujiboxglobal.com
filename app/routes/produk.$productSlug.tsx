import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug } = params
  const oneProductBySlugQuery = gql`
    query OneProductBySlug($slug: String) {
      product(where: { slug: $slug }) {
        id
        name
        slug
        description
        material
        height
        length
        width
        images {
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
    }
  `
  const response = await graphcmsClient
    .query(oneProductBySlugQuery, { slug: productSlug })
    .toPromise()
  const { product } = response.data

  return json(product)
}

export default function ProductSlug() {
  const product = useLoaderData()

  return (
    <>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  )
}
