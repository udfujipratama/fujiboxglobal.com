import { FunctionComponent } from 'react'
import { category } from '~/types'

interface CategoryProps {
  categories: category[]
}

export const Category: FunctionComponent<CategoryProps> = ({ categories }) => {
  return (
    <div className="container lg mb-4">
      <div className="hero min-h-hero bg-base-200 py-6 rounded">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
            className="max-w-2xl rounded"
          />
          <div>
            <div className="grid gap-4 grid-cols-2">
              {categories.map((category) => {
                return <CategoryCards key={category.id} category={category} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CategoryCardsProps {
  category: category
}

const CategoryCards: FunctionComponent<CategoryCardsProps> = ({ category }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl image-full">
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

export default CategoryCards
