import { MetaFunction } from '@remix-run/node'

import PesananKhusus from './pesanan-khusus'

import { SEOHandle } from '~/lib'

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

// export const loader: LoaderFunction = async () => {
//   const response = await graphcmsClient.query(QUERY_PRODUCT).toPromise()

//   const { newProducts, categories } = response.data

//   return {
//     newProducts,
//     categories,
//   }
// }

export default function Index() {
  return (
    <>
      <PesananKhusus />
      {/* <Hero />

      <PesananKhususBanner />

      <ProductNewSection products={newProducts} />

      <WhatsAppCard />

      <ProductCategoriesSection categories={categories} />

      <InstagramHero /> */}
    </>
  )
}
