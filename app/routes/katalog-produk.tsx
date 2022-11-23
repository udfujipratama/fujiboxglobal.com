import { FunctionComponent } from 'react'

import {
  Hero,
  RegularProduct,
  SeasonalProduct,
} from '~/contents/katalog-produk'

interface KatalogProdukProps {}

const KatalogProduk: FunctionComponent<KatalogProdukProps> = () => {
  return (
    <>
      <Hero />
      <SeasonalProduct />
      <RegularProduct />
    </>
  )
}

export default KatalogProduk
