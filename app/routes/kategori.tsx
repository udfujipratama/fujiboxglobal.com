import { gql } from '@urql/core'
import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'
import { Tcategory } from '~/types'

type CategoriesData = Tcategory[]

export const loader: LoaderFunction = async () => {
  const allCategoriesQuery = gql`
    query AllCategories {
      categories {
        id
        name
        slug
        image {
          url
        }
      }
    }
  `

  const response = await graphcmsClient.query(allCategoriesQuery).toPromise()
  const { categories } = response.data

  return json(categories)
}

export default function Categories() {
  const categories = useLoaderData<CategoriesData>()

  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <Link to={`/kategori/${category.slug}`}>{category.name}</Link>
          </div>
        )
      })}

      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
    </>
  )
}
