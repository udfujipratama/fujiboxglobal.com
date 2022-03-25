import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { categorySlug } = params

  const oneCategoryBySlugQuery = gql`
    query oneCategoryBySlug($slug: String!) {
      category(where: { slug: $slug }) {
        id
        name
        image {
          url
        }
        products {
          id
          name
          material
          height
          length
          width
          images {
            url
          }
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(oneCategoryBySlugQuery, { slug: categorySlug })
    .toPromise()
  const { category } = response.data

  return json({
    category,
  })
}

export default function CategorySlug() {
  const category = useLoaderData()

  return (
    <>
      <pre>{JSON.stringify(category, null, 2)}</pre>
    </>
  )
}
