import { FunctionComponent } from 'react'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Beranda</a>
        <a className="link link-hover">Katalog</a>
        <a className="link link-hover">Artikel</a>
        <a className="link link-hover">Pemesanan</a>
      </div>
      <div>
        <p>Copyright © 2022 - Hak Cipta dilindungi oleh Fujibox </p>
      </div>
    </footer>
  )
}
