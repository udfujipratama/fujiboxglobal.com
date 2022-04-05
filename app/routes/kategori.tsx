import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'

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
      productsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const response = await graphcmsClient.query(allCategoriesQuery).toPromise()
  const { productsConnection, categories } = response.data

  return json({ productsConnection, categories })
}

export default function Categories() {
  const { categories } = useLoaderData()

  return (
    <div>
        <CardsList route="kategori" items={categories} />
      </div>
  )
}
