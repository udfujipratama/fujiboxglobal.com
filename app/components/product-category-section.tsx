import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { Tcategory } from '~/types'

interface CategoryProps {
  categories: Tcategory[]
}

export const ProductCategorySection: FunctionComponent<CategoryProps> = ({
  categories,
}) => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex w-full justify-between flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">Kategori produk</h1>
            <Link className="btn btn-primary btn-sm" to="/categories">
              Lihat semua kategori
            </Link>
          </div>
          <img
            className="rounded-2xl object-cover max-h-[520px]"
            alt="Kategori produk"
            src="https://media.graphassets.com/ifohFFVvQ26HWzskzf8p"
          />
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => {
            return <CategoryCard key={category.id} category={category} />
          })}
        </div>
      </div>
    </div>
  )
}

interface CategoryCardsProps {
  category: Tcategory
}

const CategoryCard: FunctionComponent<CategoryCardsProps> = ({ category }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full hover:bg-fujibox hover:text-white cursor-pointer">
      <figure>
        <img src={category.image.url} alt={category.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
      </div>
    </div>
  )
}
