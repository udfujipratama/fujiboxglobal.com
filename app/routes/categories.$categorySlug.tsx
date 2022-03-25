import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { categorySlug } = params

  const oneCategoryQuery = gql`
    query OneCategory($slug: String) {
      categories(where: { slug: $slug }) {
        products {
          height
          id
          name
          material
          width
          length
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(oneCategoryQuery, { slug: categorySlug })
    .toPromise()
  const { categories } = response.data

  return {
    categories,
  }
}

export default function CategorySlug() {
  const category = useLoaderData()

  return (
    <div>
      <pre> {JSON.stringify(category, null, 2)}</pre>
    </div>
  )
}
