import { FunctionComponent } from 'react'

interface PesananKhususbrandsProps {}

export const PesananKhususBrands: FunctionComponent<
  PesananKhususbrandsProps
> = () => {
  return (
    <section className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
        Kami bangga menjadi bagian dari perjalanan mereka
      </h1>
      <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=width:500,height:500/GsJeuGozTHekzpHN5g5K"
            alt="brandlogo"
            className="block object-contain h-36"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/LkUQFHZQUu4k5jTAD7EL"
            alt="brandlogo"
            className="block object-contain h-24"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/G6pl0vgtSMq7q7JrCraz"
            alt="brandlogo"
            className="block object-contain h-24"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/RbKIXy4QqmWi2rGCiUbg"
            alt="brandlogo"
            className="block object-contain h-36"
          />
        </div>
      </div>
    </section>
  )
}
