import { FunctionComponent } from 'react'

interface PesananKhususDetailProps {}

const PesananKhususDetail: FunctionComponent<PesananKhususDetailProps> = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
              FUJIBOX KRAFT | GABLE BOX JAR 2 | DUS SPECIAL FUJI
            </span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            harum voluptates sunt minima dignissimos deserunt consequuntur. Quia
            explicabo natus perspiciatis blanditiis quae deleniti nostrum
            corrupti maxime perferendis sequi, necessitatibus amet.
          </p>
          {/* <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Saya ingin produk ini
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex items-center gap-8 p-6 lg:p-10">
          <img
            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="rounded-lg w-1/2"
            alt="Tree"
          />
          <div>
            <img
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="rounded-lg mb-8"
              alt="Tree"
            />
            <img
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
      </div>

      <section className="bg-gradient bg-primary py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-5 box-content">
          <div className="flex items-center flex-col md:flex-row -mx-5">
            <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
              <h6 className="uppercase font-semibold text-xs md:text-base text-white">
                Mulai dijual
              </h6>
              <h3 className="font-bold font-heading text-2xl md:text-4xl text-white">
                Saturday 17
              </h3>
              <h3 className="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                @ 10:00 AM
              </h3>
              <div className="mt-4 w-full md:w-44">
                <button
                  type="button"
                  className="p-2 bg-whatsapp hover:bg-lime-700 text-white w-full text-center font-semibold shadow-md rounded-lg "
                >
                  Join waiting List
                </button>
              </div>
            </div>
            <div className="w-full md:w-auto px-5">
              <div className="flex justify-center text-white text-center">
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>0</span>
                    <span>1</span>
                  </div>
                  <div className="opacity-75 text-xs mt-3 uppercase">Day</div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>1</span>
                    <span>8</span>
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">Hour</div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>5</span>
                    <span>0</span>
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">Min</div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>1</span>
                    <span>9</span>
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PesananKhususDetail
