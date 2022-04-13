import { FunctionComponent } from 'react'
import { Link } from 'remix'

import type { Categories, Category } from '~/types'

interface CategoryCardsProps {
  categories: Categories
}

interface CategoryCardProps {
  category: Category
}

const Categorycard: FunctionComponent<CategoryCardProps> = ({ category }) => {
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={category.image.url} alt={category.slug} />
      </figure>
      <div className="card-body absolute inset-x-0 bottom-0">
        <div className="card-actions justify-end">
          <Link
            to={`/produk?kategori=${category.slug}`}
            className="btn btn-xs lg:btn-sm btn-primary"
          >
            {category.name}
          </Link>
        </div>
      </div>
    </div>
  )
}

export const CategoryCards: FunctionComponent<CategoryCardsProps> = ({
  categories,
}) => {
  return (
    <div className="container">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => {
          return <Categorycard key={category.id} category={category} />
        })}
      </div>
    </div>
  )
}
