import { gql } from '@urql/core'
import { Link, LoaderFunction, useLoaderData } from 'remix'
import { CardsList, Hero, InstagramHero, WhatsAppCard } from '~/components'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async () => {
  const allProductsAndCategoryQuery = gql`
    query AllProductsAndCategory {
      category(where: { name: "New Product" }) {
        products(last: 5) {
          name
          slug
          images {
            url
            id
          }
          height
          length
          material
          width
        }
      }
      categories(where: { name_not: "New Product" }) {
        id
        slug
        name
        image {
          url
        }
      }
    }
  `

  const response = await graphcmsClient
    .query(allProductsAndCategoryQuery)
    .toPromise()
  const { category, categories } = response.data

  return {
    category,
    categories,
  }
}

export default function Index() {
  const { category, categories } = useLoaderData()

  return (
    <>
      <Hero />
      <div className="container my-20">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Produk terbaru</h1>
          <Link className="btn btn-primary btn-sm" to="/produk">
            Lihat semua produk
          </Link>
        </div>
        <CardsList tag="NEW" route="produk" items={category.products} />
      </div>
      <WhatsAppCard />
      <div className="container my-20">
        <div className="flex w-full justify-between flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold">Kategori produk</h1>
              <Link className="btn btn-primary btn-sm" to="/produk">
                Lihat semua kategori
              </Link>
            </div>
            <img
              className="rounded-2xl object-cover max-h-[700px]"
              alt="Kategori produk"
              src="https://media.graphassets.com/ifohFFVvQ26HWzskzf8p"
            />
          </div>
          <CardsList route="kategori" items={categories} />
        </div>
      </div>
      <InstagramHero />
    </>
  )
}
