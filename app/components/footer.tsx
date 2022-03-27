import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer footer-center p-10 mt-20 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Beranda
        </Link>
        <Link to="/produk" className="link link-hover">
          Produk
        </Link>
        <Link to="/pemesanan" className="link link-hover">
          Pemesanan
        </Link>
      </div>
      <div>
        <p>Copyright © 2022 - Hak Cipta dilindungi oleh Fujibox</p>
      </div>
    </footer>
  )
}
