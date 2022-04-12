import { Disclosure } from '@headlessui/react'
import { FunctionComponent } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Link } from 'remix'

import type { Categories, Collections } from '~/types'

interface ProductsExplorerSidebarProps {
  categories: Categories
  collections: Collections
}

export const ProductsExplorerSidebar: FunctionComponent<
  ProductsExplorerSidebarProps
> = ({ categories, collections }) => {
  return (
    <aside id="sidebar" className="flex flex-col min-w-[200px] gap-10">
      <SidebarDisclosure
        title={`Kategori (${categories.length})`}
        content={
          <ul className="list-none">
            {categories.map((category) => {
              return (
                <Link key={category.id} to={`/kategori/${category.slug}`}>
                  <li className="py-1 md:py-2 link link-hover">
                    {category.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        }
      />

      <SidebarDisclosure
        title={`Koleksi (${collections.length})`}
        content={
          <ul>
            {collections.map((collection) => {
              return (
                <Link
                  key={collection.id}
                  to={`/koleksi/${collection.slug}`}
                  className="link link-hover"
                >
                  <li className="py-1 md:py-2 link link-hover">
                    {collection.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        }
      />
    </aside>
  )
}

interface SidebarDisclosureProps {
  title: string
  content: React.ReactNode
}

export const SidebarDisclosure: FunctionComponent<SidebarDisclosureProps> = ({
  title,
  content,
}) => {
  return (
    <Disclosure>
      {({ open }) => {
        return (
          <div>
            <Disclosure.Button className="flex justify-between w-full underline underline-offset-8 font-bold hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 text-left">
              <span>{title}</span>
              <IoIosArrowDropdown
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="py-4 text-sm text-gray-900">
              {content}
            </Disclosure.Panel>
          </div>
        )
      }}
    </Disclosure>
  )
}
