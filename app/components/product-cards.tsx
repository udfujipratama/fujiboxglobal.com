import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { TProduct } from '~/types'

interface ProductsProps {
  products: TProduct[]
}

export const ProductCards: FunctionComponent<ProductsProps> = ({
  products,
}) => {
  return (
    <div className="container lg mb-8">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-4xl font-bold">Produk terbaru</h1>
        <Link className="btn btn-primary btn-sm" to="/produk">
          Lihat semua produk
        </Link>
      </div>
      <div className="flex gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

interface ProductProps {
  product: TProduct
}

export const ProductCard: FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg hover:bg-fujibox hover:text-white cursor-pointer">
      <figure>
        <img
          className="min-h-[225px]"
          src={product.images[0].url}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          {/* <div className="badge badge-primary">BARU</div> */}
        </h2>
      </div>
    </div>
  )
}
