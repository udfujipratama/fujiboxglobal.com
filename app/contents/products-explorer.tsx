import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { ProductCards, PaginationButtons } from '~/components'
import { ProductsExplorerSidebar } from '~/contents'

import type { Categories, Collections, Connection, Products } from '~/types'

interface ProductsExplorerProps {
  categories: Categories
  productsConnection: Connection
  collections: Collections
  products: Products
}

export const ProductsExplorer: FunctionComponent<ProductsExplorerProps> = ({
  products,
  productsConnection,
  categories,
  collections,
}) => {
  return (
    <div className="container my-10">
      <div className="flex w-full items-center mb-4">
        <nav className="text-sm breadcrumbs text-slate-400">
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/produk">Produk</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <ProductsExplorerSidebar
          categories={categories}
          collections={collections}
        />

        <div>
          {products.length > 0 ? (
            <ProductCards products={products} />
          ) : (
            <p>Maaf tidak ada produk tersedia.</p>
          )}

          <PaginationButtons productsConnection={productsConnection} />
        </div>
      </div>
    </div>
  )
}
