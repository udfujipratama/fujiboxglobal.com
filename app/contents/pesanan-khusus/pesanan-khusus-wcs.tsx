import { FunctionComponent } from 'react'
import { FaPencilRuler, FaThumbsUp, FaTruck } from 'react-icons/fa'
import { HiOutlineChat } from 'react-icons/hi'
import { RiFilePaperLine } from 'react-icons/ri'

interface PesananKhususWcsProps {}

export const PesananKhususWcs: FunctionComponent<
  PesananKhususWcsProps
> = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-fujibox">
            Cara Baru
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Kemudahan yang kami sediakan
        </h2>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          <div className="flex max-w-md ">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 ">
                <svg
                  className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <RiFilePaperLine size={35} />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Bahan yang bervariasi
              </h6>
              <p className="text-sm text-gray-900">
                Memudahkan anda dalam memilih jenis bahan yang anda inginkan
              </p>
            </div>
          </div>
          <div className="flex max-w-md ">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12">
                <svg
                  className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <FaPencilRuler size={35} />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Spesifikasi ukuran yang lengkap
              </h6>
              <p className="text-sm text-gray-900">
                Berbagai macam ukuran serta model berdasarkan trend di market
              </p>
            </div>
          </div>
          <div className="flex max-w-md ">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 ">
                <svg
                  className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <HiOutlineChat size={35} />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Konsultasi secara personal
              </h6>
              <p className="text-sm text-gray-900">
                Memberikan insight dan pandangan baru tentang produk terkini
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:px-16">
          <div className="flex max-w-md ">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 ">
                <svg
                  className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <FaThumbsUp size={35} />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Harga yang baik
              </h6>
              <p className="text-sm text-gray-900">
                Harga yang baik sesuai dengan kebutuhan
              </p>
            </div>
          </div>
          <div className="flex max-w-md ">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 ">
                <svg
                  className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <FaTruck size={35} />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Pengiriman terpercaya
              </h6>
              <p className="text-sm text-gray-900">
                Mengunakan pihak ketiga terpercaya dalam pengiriman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
