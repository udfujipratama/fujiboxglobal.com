import { FunctionComponent } from 'react'
import { Link } from 'remix'

import type { Product, Products } from '~/types'

interface CardsListProps {
  route: string
  items: Products
}

export const CardsList: FunctionComponent<CardsListProps> = ({
  route,
  items,
}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item, index) => {
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

  const LinkLihatProduk =
    route === 'kategori'
      ? `/${route}/${item.slug}`
      : `/${route}/${item.slug}/${item.categories[0].slug}`

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full">
      {itemImageUrl && (
        <figure>
          <img src={itemImageUrl} alt={item.name} />
        </figure>
      )}
      <div className="card-body">
        {hasCategory && route !== 'kategori' && (
          <span className="text-[10px] text-slate-400">
            {item.categories[0]?.name}
          </span>
        )}

        <h2 className="card-title text-xs">{item.name}</h2>
        <Link className="btn btn-primary btn-sm text-xs" to={LinkLihatProduk}>
          Lihat produk
        </Link>
      </div>
    </div>
  )
}
