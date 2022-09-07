import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MetaFunction } from 'remix'

import { SEOHandle } from '~/lib'

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/pemesanan`, priority: 0.9 }]
  },
}

export const meta: MetaFunction = () => {
  return {
    title: 'Pemesanan dengan Fujibox',
    description:
      'Suka dengan produk kami? Ingin marketing kami menghubungi Anda? Isi form reseller Fujibox ini untuk kami segera menghubungi Anda.',
  }
}

export default function Pemesanan() {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              Hubungi kami
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
              Untuk mempermudah komunikasi anda dengan kami, cukup tekan tombol
              dibawah ini
            </p>
            <div className="mb-10 text-center md:mb-16 lg:mb-20">
              <a
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-whatsapp mx-auto hover:bg-whatsapp focus:shadow-outline focus:outline-none"
                href="https://wa.me/6281291071355?text=Halo%20saya%20ingin%20langsung%20terhubung%20dengan%20marketing%20fuji"
                target="_blank"
                rel="noreferrer"
              >
                Tanya Fujibox
                <span className="ml-2">
                  <IoLogoWhatsapp />
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-sm text-gray-600 md:mb-2">
                Follow us
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/fujiboxglobal/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram size={35} />
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/fujiboxglobal"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook size={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
      {/* <div className="flex mt-16 gap-8 max-w-4xl mx-auto">
        <div className="container flex flex-col lg:flex-row justify-center">
          <div className="container border-solid border-2 h-60 p-4 mt-3 flex flex-col justify-around">
            <h2 className="text-xl text-center">
              Ingin terhubung langsung dengan kami ?
            </h2>
            <a
              href="https://wa.me/6281291071355?text=Halo%20saya%20ingin%20langsung%20terhubung%20dengan%20marketing%20fuji"
              target="_blank"
              rel="noreferrer"
              className="btn btn-lg btn-wide gap-2 bg-whatsapp mx-auto hover:bg-whatsapp"
            >
              Tanya Fujibox
              <span>
                <IoLogoWhatsapp />
              </span>
            </a>
          </div>
          <div className="container border-solid border-2 h-60 p-4 mt-3 flex flex-col justify-around">
            <h1 className="text-xl text-center">中文服務</h1>
            <a
              href="https://wa.me/6281291071355?text=您好%2C%20我想直接聯繫%20FUJIBOX"
              target="_blank"
              rel="noreferrer"
              className="btn btn-lg btn-wide gap-2 bg-whatsapp mx-auto hover:bg-whatsapp"
            >
              請問 Fujibox
              <span>
                <IoLogoWhatsapp />
              </span>
            </a>
          </div>
        </div>
      </div> */}
    </>
  )
}
