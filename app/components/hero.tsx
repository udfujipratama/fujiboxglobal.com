import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="container lg mb-8">
      <div className="hero">
        <img
          className="w-full object-cover m-h-hero"
          src="https://media.graphcms.com/QfFCE1BaQSKj6ymQgZHJ?_ga=2.113091843.602837813.1648699355-1199703748.1645432742"
          alt="hero-cover"
        />
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        {/* <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Selamat datang</h1>
            <p className="mb-5">Berbagai produk untuk kemasan dan dus.</p>
            <Link className="btn btn-primary" to="/produk">
              Lihat semua produk
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}
