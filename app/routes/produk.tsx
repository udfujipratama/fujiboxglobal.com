import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { CardsList } from '~/components'
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
      <div className="container my-20">
        <nav>Breadcrumb</nav>

        <div id="sidebar-items" className="flex flex-col xl:flex-row">
          <aside id="sidebar" className="flex flex-col min-w-[250px]">
            <div id="sidebar-categories">Categories</div>
            <div id="sidebar-collections">Collections</div>
          </aside>

          <div id="items-pagination">
            <CardsList route="produk" items={products} />
            <div>Pagination</div>
          </div>
        </div>
      </div>
    </>
  )
}
