import { FunctionComponent } from "react";
import { Link } from "remix";

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="container lg">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              className="max-h-14"
              src="/images/logo/fujibox-logo.png"
              alt="Fujibox"
            />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-primary">
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
              <li>
                <Link to="/cerita">Cerita</Link>
              </li>
              <li>
                <Link to="/kontak">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
            >
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
              <li>
                <Link to="/cerita">Cerita</Link>
              </li>
              <li>
                <Link to="/kontak">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
