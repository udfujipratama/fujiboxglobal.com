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
  const itemImageUrl = item.image?.url ? item.image?.url : item.images[0].url

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full">
      <figure>
        <img src={itemImageUrl} alt={item.name} />
      </figure>
      <div className="card-body">
        {route !== 'kategori' && (
          <span className="text-[10px] text-slate-400">
            {item.categories[0].name}
          </span>
        )}

        <h2 className="card-title text-sm">{item.name}</h2>
        <Link className="btn btn-primary btn-sm" to={`/${route}/${item.slug}`}>
          Lihat produk
        </Link>
      </div>
    </div>
  )
}
