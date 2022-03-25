import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { Footer, Navbar } from '~/components'
import { graphcmsClient } from '~/lib'
import { TProduct } from '~/types'

type ProductsData = TProduct[]

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

  return json(products)
}

export default function Products() {
  const products = useLoaderData<ProductsData>()

  return (
    <>
      <Navbar />
      <div>
        {products.map((product) => {
          return (
            <div>
              <Link to={`/products/${product.slug}`}>{product.name}</Link>
            </div>
          )
        })}
        {/* 
        <pre>{JSON.stringify(products, null, 2)}</pre> */}
      </div>
      <Footer />
    </>
  )
}
