/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FiMenu } from 'react-icons/fi'
import { Link } from 'remix'

import { SearchForm } from './search-form'

import { navigationLinks } from '~/data'

const checkAndCloseDropDown = (e: any) => {
  const targetEl = e.currentTarget
  if (targetEl && targetEl.matches(':focus')) {
    setTimeout(() => {
      targetEl.blur()
    }, 0)
  }
}
export const NavbarHyper = () => {
  return (
    <div className="flex flex-wrap items-center  max-w-7xl mx-auto h-24 sticky top-0 z-50 bg-white sm:px-6 lg:px-8">
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
        <nav className="hidden lg:tracking-wide lg:text-sm lg:space-x-4 lg:flex">
          <span className="mt-2 w-full">
            <SearchForm />
          </span>

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
        </nav>

        <div className="flex items-center ml-8">
          <div className="flex items-center justify-between border-gray-100 divide-x divide-gray-100 border-x">
            {/* <span>
              <button
                type="button"
                className="block p-4 lg:p-6 border-b-4 border-transparent hover:border-primary"
              >
                <FiShoppingCart />
              </button>
            </span>

            <span>
              <a
                href="/"
                className="block p-4 lg:p-6 border-b-4 border-transparent hover:border-primary"
              >
                <FiUser />
              </a>
            </span> */}

            <span className="lg:hidden">
              <div className="dropdown dropdown-end">
                <button
                  type="button"
                  tabIndex={0}
                  className="block p-4 lg:p-6 border-b-4 border-transparent hover:border-primary"
                  onMouseDown={(e) => {
                    checkAndCloseDropDown(e)
                  }}
                >
                  <FiMenu />
                </button>
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
