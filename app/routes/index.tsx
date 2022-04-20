import { Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Hero, InstagramHero, WhatsAppCard } from '~/components'
import { CategoryCards, ProductHorizontalCards } from '~/contents'
import { QUERY_PRODUCT } from '~/graphql'
import { graphcmsClient, SEOHandle } from '~/lib'

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }]
  },
}

export const meta: MetaFunction = () => {
  return {
    title: 'Fujibox',
    description: 'Crafting a good packaging product.',
  }
}

export const loader: LoaderFunction = async () => {
  const response = await graphcmsClient.query(QUERY_PRODUCT).toPromise()

  const { newProducts, categories } = response.data

  return {
    newProducts,
    categories,
  }
}

export default function Index() {
  const { newProducts, categories } = useLoaderData()

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
        {/* <ProductCards route="produk" products={newProducts} /> */}
        <ProductHorizontalCards route="produk" products={newProducts} />
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

          <CategoryCards categories={categories} />
        </div>
      </div>

      <InstagramHero />
    </>
  )
}
