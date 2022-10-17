import { FunctionComponent } from 'react'

interface PesananKhususHeroProps {}

export const PesananKhususHero: FunctionComponent<
  PesananKhususHeroProps
> = () => {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-9">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-fujibox">
                Kolaborasi Baru
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="inline-block text-fujibox">Pesanan Khusus</span>{' '}
              menjadi mudah
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              kami menawarkan beberapa pilihan terbaik untuk membantu tumbuh
              kembangnya bisnis anda
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/pesanan-khusus-penawaran"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-fujibox hover:bg-fujibox focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 text-lg">Coba sekarang</span>
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-48 rounded-lg shadow-md sm:h-96"
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gvbuzqkFQCm1MasLNOk0"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
