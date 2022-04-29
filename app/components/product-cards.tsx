import { FunctionComponent } from 'react'
import { Link } from 'remix'

import type { Product, Products } from '~/types'

interface ProductCardsProps {
  products: Products
}

export const ProductCards: FunctionComponent<ProductCardsProps> = ({
  products,
}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((item, index) => {
        return <CardItem key={item.id || index} item={item} />
      })}
    </div>
  )
}

interface CardItemsProps {
  item: Product
}

const CardItem: FunctionComponent<CardItemsProps> = ({ item }) => {
  const itemImageUrl =
    item.images[0]?.url ||
    item.categories[0].image.url ||
    item.collections[0].image.url ||
    ''

  const hasCategory = Boolean(
    item.categories?.length && item.categories[0]?.name
  )

  const LinkClassname = item.soldOut
    ? 'btn btn-disabled btn-sm text-xs'
    : 'btn btn-primary btn-sm text-xs'

  const LinkName = item.soldOut ? 'SOLD OUT' : 'Lihat Produk'

  const LinkLihatProduk = `/produk/${item.slug}/${item.categories[0].slug}`

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full">
      {itemImageUrl && (
        <figure>
          <img src={itemImageUrl} alt={item.name} />
        </figure>
      )}
      <div className="card-body">
        {hasCategory && (
          <span className="text-[10px] text-slate-400">
            {item.categories[0]?.name}
          </span>
        )}

        <h2 className="card-title text-xs">{item.name}</h2>
        <Link className={LinkClassname} to={LinkLihatProduk}>
          {LinkName}
        </Link>
      </div>
    </div>
  )
}
