import { json, LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import {
  PesananKhususBrands,
  PesananKhususGallery,
  PesananKhususHero,
  PesananKhususWcs,
} from '~/contents/pesanan-khusus'
import { QUERY_ALL_PESANAN_KHUSUS_GALLERIES } from '~/graphql'
import { SEOHandle, graphcmsClient } from '~/lib'

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
  const response = await graphcmsClient
    .query(QUERY_ALL_PESANAN_KHUSUS_GALLERIES, {})
    .toPromise()

  const { pesananKhususGalleries } = response.data
  return json({ pesananKhususGalleries })
}

export default function Index() {
  const { pesananKhususGalleries } = useLoaderData()

  return (
    <>
      <PesananKhususHero />
      <PesananKhususBrands />
      <PesananKhususWcs />
      <PesananKhususGallery galleries={pesananKhususGalleries} />
    </>
  )
}
