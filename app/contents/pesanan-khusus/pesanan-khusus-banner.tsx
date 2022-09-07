import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface PesananKhususBannerProps {}

export const PesananKhususBanner: FunctionComponent<
  PesananKhususBannerProps
> = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded drop-shadow-lg lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-fujibox group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-fujibox group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-fujibox group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-fujibox group-hover:scale-y-100" />
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
          {/* <p className="mb-5 text-gray-800">
            kami menawarkan beberapa pilihan terbaik untuk membantu tumbuh
            kembangnya bisnis anda
          </p> */}
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
