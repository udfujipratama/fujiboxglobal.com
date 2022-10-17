import { FunctionComponent } from 'react'

interface CorrugatedBoxSeriesProps {
  title: String
  size: String
  price: String
}

export const CorrugatedBoxSeries: FunctionComponent<
  CorrugatedBoxSeriesProps
> = ({ title, size, price }) => {
  return (
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
          <div className="text-2xl font-semibold">{title}</div>

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
              <p className="font-medium text-black">Ukuran {size}cm</p>
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
                Bahan Corrugated E-flute 150GSM / SINGLE WALL
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
              <p className="font-medium text-black">Minimum 500pcs</p>
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
          </ul>
          <div className="flex item-center justify-center mt-8 mb-4 relative">
            <span className="absolute inset-x-0 -top-4 left-8 lg:left-20 h-16 text-gray-600">
              Mulai dari
            </span>
            <div className="mt-1 mb-4 mr-1 font-bold text-2xl lg:text-4xl">
              Rp. {price}
            </div>
            <div className="text-gray-500 text-lg pt-2">/ pcs</div>
          </div>
        </div>
        <a
          href={`https://wa.me/6281291071355?text=Halo%20saya%20ingin%20pesan%20khusus%20${title}`}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-fujibox hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          target="_blank"
          rel="noreferrer"
        >
          Saya ingin pesan
        </a>
      </div>
    </div>
  )
}
