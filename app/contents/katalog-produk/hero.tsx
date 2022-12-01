import { FunctionComponent } from 'react'

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl lg:text-5xl font-bold tracking-tight text-red-500 sm:text-4xl sm:leading-none">
              Chinese <br className="hidden md:block" />
              New year{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Special Edition
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-xl">
              Edisi spesial dalam rangka merayakan hari raya Imlek, mari jangan
              sampai kehabisan !
            </p>
          </div>
          <div>
            <a
              href="https://shopee.co.id/fujiboxglobal"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              target="_BLANK"
              rel="noreferrer"
            >
              Pelajari lebih lanjut
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/RtJKQoCtSGStsjRkIXOW"
              alt=""
            />
            <img
              className="object-cover w-60 h-60 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ugRr1xTkuFLvSt8rCeig"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-80 h-80 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/qqokVTXxTTywqIENkwWJ"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -m-4 lg:hidden">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/RtJKQoCtSGStsjRkIXOW"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ugRr1xTkuFLvSt8rCeig"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/qqokVTXxTTywqIENkwWJ"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
