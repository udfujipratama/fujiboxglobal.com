import { FunctionComponent } from 'react'

import {
  Hero,
  RegularProduct3Grid,
  RegularProduct4Grid,
} from '~/contents/katalog-produk'

interface KatalogProdukProps {}

const KatalogProduk: FunctionComponent<KatalogProdukProps> = () => {
  return (
    <>
      <Hero />

      <RegularProduct3Grid />
      <RegularProduct4Grid />
    </>
  )
}

export default KatalogProduk
