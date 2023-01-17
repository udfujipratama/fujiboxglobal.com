import { MetaFunction } from '@remix-run/node'

import { SEOHandle } from '~/lib'

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }]
  },
}

export const meta: MetaFunction = () => {
  return {
    title: 'Fujibox',
    description: 'Crafting a good packaging product.',
  }
}

export default function Index() {
  const tokopedia = 'https://www.tokopedia.com/fujiboxglobal'
  const shopee = 'https://www.shopee.co.id/fujiboxglobal'
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl p-4 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Kami sedang mempersiapkan
            <strong className="font-extrabold text-fujibox block">
              Pengalaman berbelanja yang baru
            </strong>
          </h1>

          <p className="mt-8 sm:text-xl sm:leading-relaxed">
            untuk sementara kami bantu melalui
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {/* bg-[#03ac0e] */}
            <a
              className="block w-full rounded  px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
              href={tokopedia}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-24 w-24 inline"
                src="/images/logomarketplace/tokopedia.svg"
                alt="tokopedialogo"
              />
              <span className="block">@Fujiboxglobal</span>
            </a>
            {/* bg-[#ff6600] */}
            <a
              className="block w-full rounded  px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
              href={shopee}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-24 w-24 inline"
                src="/images/logomarketplace/shopee.svg"
                alt="shopeelogo"
              />
              <span className="block">@Fujiboxglobal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
