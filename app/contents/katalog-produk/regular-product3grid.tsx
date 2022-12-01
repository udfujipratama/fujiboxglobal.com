import { FunctionComponent } from 'react'

interface RegularProduct3GridProps {}

export const RegularProduct3Grid: FunctionComponent<
  RegularProduct3GridProps
> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="max-w-lg mb-6 font-sans text-2xl lg:text-5xl font-bold leading-none tracking-tight text-fujibox sm:text-4xl">
              Mika Fujibox
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Kemasan kokoh, bahan ivory putih tanpa laminasi, dengan Kaca Mika
              dua sisi untuk melihat jelas isinya.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
                <img
                  alt="gallery"
                  className=" w-full h-full object-cover object-center"
                  src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/b6k4qX89QR2YRpXaGbHZ"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center"
                  src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/XwEvWJ3QSuTe3mxzHzCw"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex">
              <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center"
                  src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/sXoZNR4Riq5gwdki6i2p"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
