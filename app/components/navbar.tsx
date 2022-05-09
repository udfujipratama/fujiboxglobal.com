import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'remix'

import { SearchForm } from '~/components'
import { navigationLinks } from '~/data'

const NavMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-1 py-1 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
            {navigationLinks.map((nav) => {
              return (
                <Menu.Item key={nav.title}>
                  <Link
                    to={nav.link}
                    className="flex flex-col p-2 rounded-md text-primary active:text-white hover:bg-primary text-white"
                  >
                    {nav.title}
                  </Link>
                </Menu.Item>
              )
            })}
            <Menu.Item>
              <span>
                <FiShoppingCart />
              </span>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Navbar = () => {
  return (
    <div className="container lg py-4">
      <div className="navbar bg-base-100 gap-2">
        <div className="flex-1">
          <Link to="/" className="block">
            <img
              className="max-h-10"
              src="/images/logo/fujibox-logo.png"
              alt="Fujibox"
            />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <SearchForm />
        </div>
        <div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-primary">
              {navigationLinks.map((nav: any) => {
                return (
                  <li key={nav.title}>
                    <Link to={nav.link}>{nav.title}</Link>
                  </li>
                )
              })}
              <li>
                <span>
                  <FiShoppingCart />
                </span>
              </li>
            </ul>
          </div>
          <div className="navbar-center flex lg:hidden">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
