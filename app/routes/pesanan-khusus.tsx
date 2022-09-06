import { FunctionComponent } from 'react'

import {
  PesananKhususBrands,
  PesananKhususGallery,
  PesananKhususHero,
  PesananKhususWcs,
} from '~/contents/pesanan-khusus'

interface PesananKhususProps {}

const PesananKhusus: FunctionComponent<PesananKhususProps> = () => {
  return (
    <>
      <PesananKhususHero />
      <PesananKhususBrands />
      <PesananKhususWcs />
      <PesananKhususGallery />
    </>
  )
}

export default PesananKhusus
