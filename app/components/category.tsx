import { FunctionComponent } from 'react'
import { category } from '~/types'

interface CategoryProps {
  categories: category[]
}

export const ProductCategorySection: FunctionComponent<CategoryProps> = ({
  categories,
}) => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex w-full justify-between flex-col gap-4">
        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-4xl font-bold">Contoh kategori produk</h1>
            <p className="text-2xl">Berbagai kategori produk yang tersedia.</p>
          </div>
          <img
            className="rounded-2xl object-cover max-h-[420px]"
            alt="Contoh kategori produk"
            src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
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
  category: category
}

const CategoryCard: FunctionComponent<CategoryCardsProps> = ({ category }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1626253934161-08cfea22e968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
      </div>
    </div>
  )
}
