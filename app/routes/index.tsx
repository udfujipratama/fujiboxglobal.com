import { gql } from '@urql/core'
import { Link, LoaderFunction, useLoaderData } from 'remix'

import { CardsList, Hero, InstagramHero, WhatsAppCard } from '~/components'
import { graphcmsClient, SEOHandle } from '~/lib'

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }]
  },
}

export const loader: LoaderFunction = async () => {
  const allProductsAndCategoryQuery = gql`
    query AllProductsAndCategory {
      collection(where: { name: "Produk Terbaru" }) {
        products(last: 5) {
          name
          slug
          images {
            url
            id
          }
          categories {
            name
          }
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
  const { collection, categories } = response.data
  return {
    collection,
    categories,
  }
}

export default function Index() {
  const { collection, categories } = useLoaderData()

  return (
    <>
      <Hero />
      <div className="container my-10">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Produk terbaru</h1>
          <Link className="btn btn-primary btn-xs md:btn-sm" to="/produk">
            Lihat semua produk
          </Link>
        </div>
        <CardsList route="produk" items={collection.products} />
      </div>
      <WhatsAppCard />
      <div className="container my-10">
        <div className="flex w-full justify-between flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Kategori produk
              </h1>
              <Link className="btn btn-primary btn-xs md:btn-sm" to="/produk">
                Lihat semua kategori
              </Link>
            </div>
            <img
              className="rounded-2xl object-cover max-h-[700px]"
              alt="Kategori produk"
              src="https://media.graphcms.com/MtQ6cUD5QIysrF7zJiMd?_ga=2.219704345.1809180898.1648532698-1199703748.1645432742"
            />
          </div>
          <CardsList route="kategori" items={categories} />
        </div>
      </div>
      <InstagramHero />
    </>
  )
}
