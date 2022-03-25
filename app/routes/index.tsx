import { gql } from '@urql/core'
import { Link, LoaderFunction, useLoaderData } from 'remix'
import { CardsList, Hero, WhatsAppCard } from '~/components'
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

      <div className="container my-20">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Produk terbaru</h1>
          <Link className="btn btn-primary btn-sm" to="/produk">
            Lihat semua produk
          </Link>
        </div>
        <CardsList route="produk" items={products} />
      </div>

      <WhatsAppCard />

      <div className="container my-20">
        <div className="flex w-full justify-between flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold">Kategori produk</h1>
              <Link className="btn btn-primary btn-sm" to="/kategori">
                Lihat semua kategori
              </Link>
            </div>
            <img
              className="rounded-2xl object-cover max-h-[520px]"
              alt="Kategori produk"
              src="https://media.graphassets.com/ifohFFVvQ26HWzskzf8p"
            />
          </div>
          <CardsList route="kategori" items={categories} />
        </div>
      </div>
    </>
  )
}
