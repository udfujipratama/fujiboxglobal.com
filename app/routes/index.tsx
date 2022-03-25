import { gql } from '@urql/core'
import { LoaderFunction, useLoaderData } from 'remix'
import {
  ArticleList,
  ProductCategorySection,
  Footer,
  Hero,
  Navbar,
  ProductCards,
  WhatsAppCard,
} from '~/components'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async () => {
  const allProductsAndCategoryQuery = gql`
    query AllProductsAndCategory {
      products {
        id
        slug
        name
        description
        width
        height
        length
        images {
          url
        }
      }
      categories {
        id
        slug
        name
        description
        image {
          url
        }
      }
    }
  `

  const response = await graphcmsClient
    .query(allProductsAndCategoryQuery)
    .toPromise()
  const { products, categories } = response.data

  return {
    products,
    categories,
  }
}

export default function Index() {
  const { products, categories } = useLoaderData()

  return (
    <>
      <Hero />
      <ProductCards products={products} />
      <WhatsAppCard />
      <ProductCategorySection categories={categories} />
      {/* <ArticleList /> */}
    </>
  )
}
