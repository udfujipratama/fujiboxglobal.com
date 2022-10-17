import { Link } from '@remix-run/react'
import { FunctionComponent } from 'react'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer footer-center p-10 mt-20 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Beranda
        </Link>
        <Link to="/pesanan-khusus-penawaran" className="link link-hover">
          Penawaran
        </Link>
      </div>
      <div>
        <p>Copyright © 2022 - Hak Cipta dilindungi oleh Fujibox</p>
      </div>
    </footer>
  )
}
