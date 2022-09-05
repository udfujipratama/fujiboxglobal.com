import { FunctionComponent } from 'react'

interface PesananKhususProps {}

const PesananKhusus: FunctionComponent<PesananKhususProps> = () => {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Kolaborasi Baru
                </p>
              </div>
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl sm:leading-none">
                Pesanan Khusus menjadi begitu mudah
              </h1>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/pesanan-khusus-harga"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-fujibox focus:shadow-outline focus:outline-none"
              >
                Coba Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>

      <section className="px-4 py-20 mx-auto max-w-7xl">
        <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
          Kami bangga menjadi bagian dari perjalanan mereka
        </h1>
        <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center">
            <img
              src="images/logoipsum/1.svg"
              alt="Todoist Logo"
              className="block object-contain h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="images/logoipsum/2.svg"
              alt="Slack Logo"
              className="block object-contain h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="images/logoipsum/3.svg"
              alt="Typeform Logo"
              className="block object-contain h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="images/logoipsum/4.svg"
              alt="Algolia Logo"
              className="block object-contain h-12"
            />
          </div>
        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Cara Baru
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Kemudahan yang kami sediakan
          </h2>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-fujibox sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Bagian dari perjalanan kami
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-fujibox scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1559087316-47ce212113b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80"
              alt=""
            />
          </div>

          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
            />
          </div>

          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1595246135406-803418233494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
            />
          </div>

          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1626253274763-bdabe2f097c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1354&q=80"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1626253274763-bdabe2f097c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1354&q=80"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1626253274763-bdabe2f097c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1354&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PesananKhusus
