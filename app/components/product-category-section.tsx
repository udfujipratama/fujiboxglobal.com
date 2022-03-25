import { FunctionComponent } from 'react'
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
          <div className="mb-4">
            <h1 className="text-4xl font-bold">Kategori produk</h1>
          </div>
          <img
            className="rounded-2xl object-fill max-h-[420px]"
            alt="Contoh kategori produk"
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ifohFFVvQ26HWzskzf8p"
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
    <div className="card bg-base-100 shadow-xl w-full hover:bg-fujibox hover:text-white">
      <figure>
        <img
          // src="https://images.unsplash.com/photo-1626253934161-08cfea22e968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80"
          src={category.image.url}
          alt="product-image-category"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
      </div>
    </div>
  )
}
