/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { Link, useLocation } from "@remix-run/react";

import { SearchForm } from './search-form'

import { navigationLinks } from '~/data'

export const Navbar = () => {
  const location = useLocation()
  if (
    location.pathname === '/pesanan-khusus' ||
    location.pathname === '/pesanan-khusus-penawaran'
  ) {
    return PesananKhususNavbar()
  }
  return MainNavbar()
}

const MainNavbar = () => {
  return (
    <div className="flex flex-wrap items-center w-full h-24 pt-4 lg:pt-0 sticky top-0 z-50 bg-white sm:px-6 lg:px-12">
      <div className="flex items-center">
        <Link to="/" className="pl-4 lg:pl-0">
          <img
            className="max-h-8 lg:max-h-10"
            src="/images/logo/fujibox-logo.png"
            alt="Fujibox"
          />
        </Link>
      </div>

      <div className="flex items-center justify-end flex-1">
        <nav className="hidden lg:tracking-wide lg:text-md lg:flex lg:ml-24">
          <span className="mt-2 w-full">
            <SearchForm />
          </span>
        </nav>

        <div className="hidden lg:flex justify-end flex-1 gap-4">
          {navigationLinks.map((nav: any) => {
            return (
              <Link
                key={nav.title}
                to={nav.link}
                className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
              >
                {nav.title}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center mr-4">
          <div className="flex items-center justify-between  divide-x border-x">
            <span className="lg:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <IoMenuSharp />
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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    {navigationLinks.map((nav: any) => {
                      return (
                        <div className="px-1 py-1 " key={nav.title}>
                          <Menu.Item>
                            {({ active }) => (
                              // eslint-disable-next-line arrow-body-style
                              <Link
                                to={nav.link}
                                className={`${
                                  active
                                    ? 'bg-fujibox text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {nav.title}
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      )
                    })}
                  </Menu.Items>
                </Transition>
              </Menu>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-4 lg:hidden">
        <SearchForm />
      </div>
    </div>
  )
}

const PesananKhususNavbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full h-24 sticky top-0 z-50 bg-white sm:px-6 lg:px-12">
      <div className="flex items-center">
        <Link to="/" className="pl-4 lg:pl-0">
          <img
            className="max-h-8 lg:max-h-10"
            src="/images/logo/fujibox-logo.png"
            alt="Fujibox"
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-end flex-1 gap-4">
        <Link
          to="/"
          className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
        >
          Kembali ke Beranda
        </Link>
        <Link
          to="/pesanan-khusus"
          className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
        >
          Pesanan Khusus
        </Link>
        <Link
          to="/pesanan-khusus-penawaran"
          className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
        >
          Penawaran
        </Link>
      </div>

      <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
        <span className="lg:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <IoMenuSharp />
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line arrow-body-style
                      <Link
                        to="/"
                        className={`${
                          active ? 'bg-fujibox text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Kembali ke Beranda
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line arrow-body-style
                      <Link
                        to="/pesanan-khusus"
                        className={`${
                          active ? 'bg-fujibox text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Pesanan Khusus
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line arrow-body-style
                      <Link
                        to="/pesanan-khusus-penawaran"
                        className={`${
                          active ? 'bg-fujibox text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Penawaran
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </span>
      </div>
    </div>
  )
}
