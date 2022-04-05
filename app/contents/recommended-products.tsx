import { FunctionComponent } from 'react'

import { CardsList } from '~/components'
import { TProduct } from '~/types'

interface RecommendedProductsProps {
  products: TProduct[]
}

export const RecommendedProducts: FunctionComponent<
  RecommendedProductsProps
> = ({ products }) => {
  return (
    <div className="container my-10 max-w-5xl">
      <h3 className="text-2xl mb-5">Rekomendasi</h3>
      <CardsList route="produk" items={products} />
    </div>
  )
}
