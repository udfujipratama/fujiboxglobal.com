import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface CategoryProps {
  route: string
  items: any[]
}

export const CardsList: FunctionComponent<CategoryProps> = ({
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
  item: any
}

const CardItem: FunctionComponent<CardItemsProps> = ({ route, item }) => {
  const itemImageUrl = item.image?.url ? item.image?.url : item.images[0]?.url
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
