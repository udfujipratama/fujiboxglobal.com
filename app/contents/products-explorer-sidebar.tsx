import { Disclosure } from '@headlessui/react'
import { FunctionComponent } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Link } from 'remix'

interface ProductsExplorerSidebarProps {
  categories: any[]
  collections: any[]
}

export const ProductsExplorerSidebar: FunctionComponent<
  ProductsExplorerSidebarProps
> = ({ categories, collections }) => {
  return (
    <aside id="sidebar" className="flex flex-col min-w-[300px] gap-10">
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex justify-between w-full underline underline-offset-8 font-bold hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
              <span>Kategori ({categories.length})</span>
              <IoIosArrowDropdown
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 text-sm text-gray-900">
              <ul className="list-none">
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
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

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
  )
}
