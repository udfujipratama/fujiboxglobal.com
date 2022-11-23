import { FunctionComponent } from 'react'

interface SeasonalProductProps {}

export const SeasonalProduct: FunctionComponent<SeasonalProductProps> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Seasonal Box Chinese New year by Fujibox
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            COPYWRITING C
          </p>
          <button
            type="button"
            className="flex-shrink-0 text-white bg-fujibox border-0 py-2 px-8 focus:outline-none hover:bg-fujibox rounded text-lg mt-4 lg:mt-10"
          >
            Saya ingin pesan
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://dummyimage.com/601x361"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://dummyimage.com/603x363"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://dummyimage.com/602x362"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex ">
              <img
                alt="gallery"
                className=" w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
