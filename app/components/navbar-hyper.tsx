import { FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi'
import { Link } from 'remix'

import { SearchForm } from './search-form'

import { navigationLinks } from '~/data'

export const NavbarHyper = () => {
  return (
    <div className="flex items-center justify-between h-24 mx-auto max-w-screen-2xl sticky top-0 z-50 bg-white sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link to="/" className="block pl-4 lg:pl-0">
          <img
            className="max-h-10"
            src="/images/logo/fujibox-logo.png"
            alt="Fujibox"
          />
        </Link>
      </div>

      <div className="flex items-center justify-end flex-1">
        <nav className="hidden lg:uppercase lg:tracking-wide lg:font-bold lg:text-sm lg:space-x-4 lg:flex">
          <span className="mt-2">
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
          <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
            <span>
              <button
                type="button"
                className="block p-6 border-b-4 border-transparent hover:border-primary"
              >
                <FiShoppingCart />
              </button>
            </span>

            <span>
              <a
                href="/"
                className="block p-6 border-b-4 border-transparent hover:border-primary"
              >
                <FiUser />
              </a>
            </span>
            <span className="lg:hidden">
              <a
                href="/"
                className="block p-6 border-b-4 border-transparent hover:border-primary"
              >
                <FiMenu />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
