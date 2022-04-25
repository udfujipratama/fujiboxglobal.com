import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Categories, Category } from '~/types'

interface SectionCardsProps {
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

export const ProductCategoriesSection: FunctionComponent<SectionCardsProps> = ({
  categories,
}) => {
  return (
    <div className="container my-6 lg:my-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        <div className="flex p-8 rounded-xl">
          <div className="mx-auto text-center lg:text-left">
            <h1 className="text-3xl font-extrabold md:text-4xl">Kategori</h1>
            <p className="max-w-lg mt-4 sm:leading-relaxed text-xl md:text-xl">
              Temukan kemasan yang cocok untuk produk anda
            </p>

            <Link
              className="btn btn-primary btn-sm mt-6 md:btn-sm"
              to="/produk"
            >
              Lihat semua kategori
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3">
          {categories.map((category) => {
            return <Categorycard key={category.id} category={category} />
          })}
        </div>
      </div>
    </div>
  )
}
