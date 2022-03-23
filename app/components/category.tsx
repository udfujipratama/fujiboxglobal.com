import { FunctionComponent } from 'react'
import { category } from '~/types'

interface CategoryProps {
  categories: category[]
}

export const Category: FunctionComponent<CategoryProps> = ({ categories }) => {
  return (
    <div className="container lg mb-4">
      <div className="bg-base-200 p-6 rounded flex flex-col xl:flex-row justify-between xl:justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold">Contoh kategori produk</h1>
          <img
            alt="Contoh kategori produk"
            src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
            className="max-w-2xl rounded object-cover h-[600px]"
          />
        </div>
        <div className="flex flex-wrap gap-4">
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
    <div className="card bg-base-100 shadow-xl image-full w-full max-w-[15rem]">
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
