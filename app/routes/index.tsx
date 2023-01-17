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
            <a
              className="block w-full rounded bg-[#03ac0e] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#03ac0e] focus:outline-none focus:ring sm:w-auto"
              href="/get-started"
            >
              Tokopedia
            </a>

            <a
              className="block w-full rounded bg-[#ff6600] px-12 py-3 text-sm font-medium text-white shadow hover:text-black focus:outline-none focus:ring sm:w-auto"
              href="/about"
            >
              Shopee
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
