import { Link } from '@remix-run/react'
import { FunctionComponent } from 'react'

interface PesananKhususBannerProps {}

export const PesananKhususBanner: FunctionComponent<
  PesananKhususBannerProps
> = () => {
  return (
    <div className="container mt-14 ">
      <div className="flex flex-col max-w-screen overflow-hidden bg-white border rounded-lg drop-shadow-lg lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gvbuzqkFQCm1MasLNOk0"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-fujibox">
              Kolaborasi Baru
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            <span className="text-fujibox">Pesanan Khusus</span> menjadi mudah
          </h5>

          <div className="flex items-center mt-4">
            <Link
              type="button"
              to="/pesanan-khusus"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-fujibox hover:bg-fujibox focus:shadow-outline focus:outline-none"
            >
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
