import { FunctionComponent } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Link } from 'remix'
import { CardsList, SearchForm } from '~/components'

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

        <div id="sidebar-items" className="flex flex-col xl:flex-row">
          <aside id="sidebar" className="flex flex-col min-w-[300px] gap-10">
            <div id="sidebar-categories" className="dropdown">
              <div className="flex gap-4">
                <h4
                  tabIndex={0}
                  className="font-bold mb-4 underline underline-offset-8"
                >
                  Kategori ({categories.length})
                </h4>
                <span className="pt-[4px]">
                  <IoIosArrowDropdown />
                </span>
              </div>
              <ul tabIndex={0} className="dropdown-content menu">
                {categories.map((category: any) => (
                  <Link
                    key={category.id}
                    to={`/kategori/${category.slug}`}
                    className="link link-hover"
                  >
                    <li className="mb-2">{category.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div id="sidebar-collections" className="dropdown mb-10">
              <div className="flex gap-4">
                <h4
                  tabIndex={0}
                  className="font-bold mb-4 underline underline-offset-8"
                >
                  Koleksi ({collections.length})
                </h4>
                <span className="pt-[4px]">
                  <IoIosArrowDropdown />
                </span>
              </div>

              <ul tabIndex={0} className="dropdown-content menu">
                {collections.map((collection: any) => (
                  <Link
                    key={collection.id}
                    to={`/koleksi/${collection.slug}`}
                    className="link link-hover"
                  >
                    <li className="mb-2">{collection.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </aside>

          <div id="items-pagination">
            <SearchForm />
            {products.length > 0 ? (
              <CardsList route="produk" items={products} />
            ) : (
              <p>Maaf tidak ada produk tersedia.</p>
            )}

            {/* <div className="flex justify-center mt-10">
              <div className="btn-group">
                <button className="btn btn-sm">«</button>
                <button className="btn btn-sm btn-active">1</button>
                <button className="btn btn-sm">2</button>
                <button className="btn btn-sm">3</button>
                <button className="btn btn-sm">4</button>
                <button className="btn btn-sm">»</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
