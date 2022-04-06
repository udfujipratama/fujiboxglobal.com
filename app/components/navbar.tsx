import { Menu, Transition } from '@headlessui/react'
import { FunctionComponent, Fragment } from 'react'
import { Link } from 'remix'

import { SearchForm } from '~/components'

interface NavbarProps {}

const MenuLists = [
  {
    title: 'Beranda',
    link: '/',
  },
  {
    title: 'Produk',
    link: '/produk',
  },
  {
    title: 'Pemesanan',
    link: '/pemesanan',
  },
]

interface HamburgerMenuProps {
  MenuLists: any
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {MenuLists.map((menu, index) => {
              return (
                <Menu.Item key={index}>
                  <Link
                    to={menu.link}
                    className="flex flex-col p-2 rounded-md active:bg-primary"
                  >
                    {menu.title}
                  </Link>
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="container lg py-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start flex items-center">
          <Link to="/" className="block">
            <img
              className="max-h-10"
              src="/images/logo/fujibox-logo.png"
              alt="Fujibox"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <SearchForm />
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-primary">
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
              <li>
                <Link to="/pemesanan">Pemesanan</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center flex lg:hidden">
            <HamburgerMenu MenuLists={MenuLists} />
          </div>
        </div>
      </div>
    </div>
  )
}
