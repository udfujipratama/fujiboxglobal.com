import PropTypes from 'prop-types'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { CardsList, PaginationButtons } from '~/components'
import { ProductsExplorerSidebar } from '~/contents'

interface ProductsExplorerProps {
  categories: any[]
  productsConnection: any
  collections: any[]
  products: any[]
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
            <CardsList route="produk" items={products} />
          ) : (
            <p>Maaf tidak ada produk tersedia.</p>
          )}

          <PaginationButtons productsConnection={productsConnection} />
        </div>
      </div>
    </div>
  )
}

ProductsExplorer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsConnection: PropTypes.object.isRequired,
  collections: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}
