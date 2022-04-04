import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { CardsList } from '~/components'
import { ProductsExplorerSidebar } from '~/contents'

interface ProductsExplorerProps {
  categories: any[]
  collections: any[]
  products: any[]
}

export const ProductsExplorer: FunctionComponent<ProductsExplorerProps> = ({
  categories,
  collections,
  products,
}) => {
  return (
    <>
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

            <div className="flex justify-center mt-10">
              <div className="btn-group">
                <button className="btn btn-sm">«</button>
                <button className="btn btn-sm btn-active">1</button>
                <button className="btn btn-sm">2</button>
                <button className="btn btn-sm">3</button>
                <button className="btn btn-sm">4</button>
                <button className="btn btn-sm">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
