import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Hero, InstagramHero, WhatsAppCard } from '~/components'
import { ProductCategoriesSection, ProductNewSection } from '~/contents'
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

      <ProductNewSection products={newProducts} />

      <WhatsAppCard />

      <ProductCategoriesSection categories={categories} />

      <InstagramHero />
    </>
  )
}
