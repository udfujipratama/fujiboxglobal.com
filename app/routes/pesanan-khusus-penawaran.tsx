import { FunctionComponent } from 'react'

interface PesananKhususPenawaranProps {}

const PesananKhususPenawaran: FunctionComponent<
  PesananKhususPenawaranProps
> = () => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-fujibox">
            Harga baru
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Penawaran kami
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Berikut kami sediakan beberapa pilihan untuk anda
        </p>
      </div>
      <div className="grid max-w-lg gap-10 row-gap-8 lg:max-w-screen-xl sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-xl sm:mx-auto">
        <div className="flex flex-col relative transition duration-300 bg-white rounded shadow-sm hover:shadow border-fujibox">
          <div className="relative w-full h-[12rem] lg:h-[18rem]">
            <img
              src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/bmcFT7BAQG2npwFkPf4B"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-around flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-2xl font-semibold">Lunchbox Kraft M</div>

              <ul className="my-4 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Ukuran 16 x 9 x 5cm</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Food Grade</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">
                    Bahan Kraft PE 290 Gr
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Minimum 1000pcs</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Cetak 1 warna</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Free laminasi dalam</p>
                </li>
              </ul>
              <div className="flex item-center justify-center mt-8 mb-4 relative">
                <span className="absolute inset-x-0 -top-4 left-8 lg:left-20 h-16 text-gray-600">
                  Mulai dari
                </span>
                <div className="mt-1 mb-4 mr-1 font-bold text-2xl lg:text-4xl">
                  Rp. 1035
                </div>
                <div className="text-gray-500 text-lg pt-2">/ pcs</div>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-fujibox hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Saya ingin pesan
            </a>
          </div>
        </div>
        <div className="flex flex-col relative transition duration-300 bg-white rounded shadow-sm hover:shadow border-2 border-fujibox">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-fujibox z-10">
              Paling Laris
            </div>
          </div>
          <div className="relative w-full h-[12rem] lg:h-[18rem]">
            <img
              src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/bmcFT7BAQG2npwFkPf4B"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-around flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-2xl font-semibold">Lunchbox Kraft L</div>

              <ul className="my-4 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Ukuran 18 x 11 x 5cm</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Food Grade</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">
                    Bahan Kraft PE 290 Gr
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Minimum 1000pcs</p>
                </li>

                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Cetak 1 warna</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Free laminasi dalam</p>
                </li>
              </ul>
              <div className="flex item-center justify-center mt-8 mb-4 relative">
                <span className="absolute inset-x-0 -top-4 left-8 lg:left-20 h-16 text-gray-600">
                  Mulai dari
                </span>
                <div className="mt-1 mb-4 mr-1 font-bold text-2xl lg:text-4xl">
                  Rp. 1125
                </div>
                <div className="text-gray-500 text-lg pt-2">/ pcs</div>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-fujibox hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Saya ingin pesan
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PesananKhususPenawaran
