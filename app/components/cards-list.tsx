import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface CategoryProps {
  route: string
  items: any[]
  tag?: string
}

export const CardsList: FunctionComponent<CategoryProps> = ({
  route,
  items,
  tag,
}) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item) => {
        return <CardItem key={item.id} route={route} item={item} tag={tag} />
      })}
    </div>
  )
}

interface CardItemsProps {
  route: string
  item: any
  tag?: string
}

const CardItem: FunctionComponent<CardItemsProps> = ({ route, item, tag }) => {
  const itemImageUrl = item.image?.url ? item.image?.url : item.images[0].url

  return (
    <Link to={`/${route}/${item.slug}`}>
      <div className="card card-compact bg-base-100 shadow-xl w-full hover:bg-primary hover:text-white cursor-pointer">
        <figure>
          <img src={itemImageUrl} alt={item.name} />
        </figure>
        <div className="card-body">
          {tag === 'NEW' ? (
            <div className="badge badge-error">
              <span className="font-bold text-white"> NEW</span>
            </div>
          ) : (
            <></>
          )}
          <h2 className="card-title text-sm">{item.name}</h2>
        </div>
      </div>
    </Link>
  )
}
