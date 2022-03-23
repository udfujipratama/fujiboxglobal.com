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
  const allProductsQuery = gql`
    query AllProducts {
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
    }
  `

  const response = await graphcmsClient.query(allProductsQuery).toPromise()
  const { products } = response.data

  // const products = [
  //   { id: 1, name: 'Box 1' },
  //   { id: 2, name: 'Box 2' },
  //   { id: 3, name: 'Box 3' },
  //   { id: 4, name: 'Box 4' },
  // ]

  const categories = [
    { id: 1, name: 'Dus Kuning Emas' },
    { id: 2, name: 'Dus Corrugated' },
    { id: 3, name: 'Dus kraft' },
    { id: 4, name: 'Dus Motif Tema' },
    { id: 5, name: 'Dus Cupcake' },
    { id: 6, name: 'Dus Donut' },
  ]

  return {
    products,
    categories,
  }
}

export default function Index() {
  const { products, categories } = useLoaderData()

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCards products={products} />
      <WhatsAppCard />
      <ProductCategorySection categories={categories} />
      <ArticleList />
      <Footer />
    </div>
  )
}
