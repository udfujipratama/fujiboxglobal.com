import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async () => {
  const allCollectionsQuery = gql`
    query AllCollections {
      collections {
        id
        slug
        name
        image {
          url
        }
        products {
          id
          slug
          name
          images {
            url
          }
        }
      }
    }
  `

  const response = await graphcmsClient.query(allCollectionsQuery).toPromise()
  const { collections } = response.data

  return json(collections)
}

export default function Index() {
  const collections = useLoaderData()

  return (
    <>
      <pre>{JSON.stringify(collections, null, 2)}</pre>
      {/* <CollectionSection collections={collections} /> */}
    </>
  )
}
