import { FunctionComponent } from 'react'

interface RegularProduct4GridProps {}

export const RegularProduct4Grid: FunctionComponent<
  RegularProduct4GridProps
> = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-2xl lg:text-5xl font-bold leading-none tracking-tight text-fujibox sm:text-4xl md:mx-auto">
          Box Emas Fujibox
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Dus Kue ini cocok untuk kue, lapis legit, puding dan juga untuk
          mengemas produk makanan lainnya
        </p>
      </div>
      {/* <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div> */}
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 sm:w-1/2 p-4">
          <div className="flex">
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/R0zTwMJpQ3ChRRYlywES"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4">
          <div className="flex">
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/QxMcAdXXTE2WVRFRVVI8"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4">
          <div className="flex">
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/N0pwsYjOSX6epavKKDua"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4">
          <div className="flex">
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Hbe1VqCLTFqwsKwPgBAk"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 sm:justify-center">
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
  )
}
