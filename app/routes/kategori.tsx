import { gql } from '@urql/core'
import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { CardsList } from '~/components'
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
      <div>
        <CardsList route="kategori" items={categories} />
      </div>
    </>
  )
}
