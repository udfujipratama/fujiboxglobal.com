import { FunctionComponent } from 'react'
import { Link } from 'remix'

import type { Product, Products } from '~/types'

interface ProductHorizontalCardsProps {
  route: string
  products: Products
}

export const ProductHorizontalCards: FunctionComponent<
  ProductHorizontalCardsProps
> = ({ route, products }) => {
  return (
    <div className="flex items-center space-x-12 overflow-x-auto">
      {products.map((item, index) => {
        return <CardItem key={item.id || index} route={route} item={item} />
      })}
    </div>
  )
}

interface CardItemsProps {
  route: string
  item: Product
}

const CardItem: FunctionComponent<CardItemsProps> = ({ route, item }) => {
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

  const LinkLihatProduk =
    route === 'kategori'
      ? `/${route}/${item.slug}`
      : `/${route}/${item.slug}/${item.categories[0].slug}`

  return (
    <div className="card card-compact shrink-0 bg-base-100 shadow-xl w-48">
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
