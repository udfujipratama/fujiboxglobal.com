import { FunctionComponent } from 'react'

import { ProductCards } from '~/components'
import { Products } from '~/types'

interface RecommendedProductsProps {
  products: Products
}

export const RecommendedProducts: FunctionComponent<
  RecommendedProductsProps
> = ({ products }) => {
  return (
    <div className="container my-10 max-w-5xl">
      <h3 className="text-2xl mb-5">Rekomendasi</h3>
      <ProductCards products={products} />
    </div>
  )
}
