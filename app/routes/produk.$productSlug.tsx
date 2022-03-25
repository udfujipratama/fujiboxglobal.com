import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug } = params
  const oneProductQuery = gql`
    query OneProduct($slug: String) {
      products(where: { slug: $slug }) {
        description
        height
        id
        length
        material
        name
        slug
        width
      }
    }
  `
  const response = await graphcmsClient
    .query(oneProductQuery, { slug: productSlug })
    .toPromise()
  const { products } = response.data

  return json(products)
}

export default function ProductSlug() {
  const product = useLoaderData()

  return (
    <>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  )
}
