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
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
      <div className="container flex justify-center">
        <iframe
          title="Formulir pemesanan"
          src="https://docs.google.com/forms/d/e/1FAIpQLScSeQraKJFqo8iIxZYo30h0usmJSvGPNfGDGDAi3m7DJHb3JQ/viewform?embedded=true"
          width="640"
          height="1500"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Memuat formulir pemesanan...
        </iframe>
      </div>
      <div className="container border-solid border-2 h-60 p-4 mt-3 flex flex-col justify-around">
        <h1 className="text-xl text-center">
          Ingin terhubung langsung dengan kami ?
        </h1>
        <a
          href="https://wa.me/6281291071355"
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
    </div>
  )
}
