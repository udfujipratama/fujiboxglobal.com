import { FunctionComponent } from 'react'
import { Link } from 'remix'

// import { ProductCarouselCards } from './product-carousel-cards'

import { ProductCarouselTrendyolCards } from './product-carousel-trendyol-cards'

import { Products } from '~/types'

interface ProductNewSectionProps {
  products: Products
}

export const ProductNewSection: FunctionComponent<ProductNewSectionProps> = ({
  products,
}) => {
  return (
    <div className="container my-10">
      <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-start lg:text-left">
        <h1 className="text-2xl md:text-4xl font-bold">Produk Terbaru</h1>
        <Link
          className="btn btn-primary btn-sm my-auto md:btn-sm md:text-right"
          to="/produk"
        >
          Lihat semua produk
        </Link>
      </div>
      <ProductCarouselTrendyolCards products={products} />
      {/* <ProductCarouselCards products={products} /> */}
    </div>
  )
}
