import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="container lg mb-8">
      <div className="hero">
        <Link to="/koleksi/idul-fitri-or-lebaran">
          <img
            className="w-[1280px] object-cover rounded-xl"
            src="https://media.graphassets.com/kGDjy6KARruA0MeAFoaH?_gl=1*1f23h42*_ga*OTYxMjM0NjA0LjE2NDc4NDkwNDU.*_ga_G6FYGSYGZ4*MTY0OTA0NzcwNi4xMS4xLjE2NDkwNDc3MjIuNDQ."
            alt="hero-cover"
          />
        </Link>
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
