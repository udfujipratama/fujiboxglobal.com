import { FunctionComponent } from 'react'

interface PesananKhususbrandsProps {}

export const PesananKhususBrands: FunctionComponent<
  PesananKhususbrandsProps
> = () => {
  return (
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
  )
}
