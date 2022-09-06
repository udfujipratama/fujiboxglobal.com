/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FiMenu } from 'react-icons/fi'
import { Link, useLocation } from 'remix'

import { SearchForm } from './search-form'

import { navigationLinks } from '~/data'

const checkAndCloseDropDown = (e: any) => {
  const targetEl = e.currentTarget
  if (
    // for android chrome
    (targetEl && targetEl.matches(':focus')) ||
    // for ios chrome
    (targetEl && targetEl.matches(':focus-visible'))
  ) {
    setTimeout(() => {
      targetEl.blur()
    }, 0)
  }
}
export const Navbar = () => {
  const location = useLocation()
  if (
    location.pathname === '/pesanan-khusus' ||
    location.pathname === '/pesanan-khusus-harga'
  ) {
    return PesananKhususNavbar()
  }
  return MainNavbar()
}

const MainNavbar = () => {
  return (
    <div className="flex flex-wrap items-center w-full h-24 sticky top-0 z-50 bg-white sm:px-6 lg:px-12">
      <div className="flex items-center">
        <Link to="/" className="pl-4 lg:pl-0">
          <img
            className="max-h-10"
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

        <div className="flex items-center ml-8">
          <div className="flex items-center justify-between border-gray-100 divide-x divide-gray-100 border-x">
            <span className="lg:hidden">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="block p-4 lg:p-6 border-b-4 border-transparent hover:border-primary"
                  onMouseDown={(e) => {
                    checkAndCloseDropDown(e)
                  }}
                >
                  <FiMenu />
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  {navigationLinks.map((nav: any) => {
                    return (
                      <li key={nav.title}>
                        <Link
                          to={nav.link}
                          className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
                          onClick={(e) => {
                            checkAndCloseDropDown(e)
                          }}
                        >
                          {nav.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
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
            className="max-h-10"
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
          to="/pesanan-khusus-harga"
          className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
        >
          Penawaran kami
        </Link>
      </div>

      <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
        <span className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="block p-4 lg:p-6 border-b-4 border-transparent hover:border-primary"
              onMouseDown={(e) => {
                checkAndCloseDropDown(e)
              }}
            >
              <FiMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <Link
                  to="/"
                  className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
                >
                  Kembali ke Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/pesanan-khusus"
                  className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
                >
                  Pesanan Khusus
                </Link>
              </li>
              <li>
                <Link
                  to="/pesanan-khusus-harga"
                  className="h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-primary"
                >
                  Penawaran kami
                </Link>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  )
}
