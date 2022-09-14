import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { FunctionComponent } from 'react'

import {
  PesananKhususBrands,
  PesananKhususGallery,
  PesananKhususHero,
  PesananKhususWcs,
} from '~/contents/pesanan-khusus'
import { QUERY_ALL_PESANAN_KHUSUS_GALLERIES } from '~/graphql'
import { graphcmsClient } from '~/lib'

interface PesananKhususProps {}

export const loader: LoaderFunction = async () => {
  const first = 8
  const response = await graphcmsClient
    .query(QUERY_ALL_PESANAN_KHUSUS_GALLERIES, { first })
    .toPromise()
  const { pesananKhususGalleries } = response.data
  return json({
    pesananKhususGalleries,
  })
}
const PesananKhusus: FunctionComponent<PesananKhususProps> = () => {
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

export default PesananKhusus
