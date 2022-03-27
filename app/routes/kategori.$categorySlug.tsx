import { gql } from '@urql/core'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { ProductsExplorer } from '~/contents'
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
          slug
          material
          height
          length
          width
          images {
            url
          }
        }
      }
      categories {
        id
        slug
        name
      }
      collections {
        id
        slug
        name
      }
    }
  `
  const response = await graphcmsClient
    .query(oneCategoryBySlugQuery, { slug: categorySlug })
    .toPromise()
  const { category, categories, collections } = response.data

  return json({ category, categories, collections })
}

export default function CategorySlug() {
  const { category, categories, collections } = useLoaderData()
  return (
    <>
      <div className="container mt-10">
        <h2 className="text-4xl">{category.name}</h2>
      </div>

      <ProductsExplorer
        products={category.products}
        categories={categories}
        collections={collections}
      />
    </>
  )
}
