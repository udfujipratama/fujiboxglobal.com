import { FunctionComponent } from 'react'

interface ProductsNewExplorerProps {}

export const ProductsNewExplorer: FunctionComponent<
  ProductsNewExplorerProps
> = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details
              open
              className="overflow-hidden border border-gray-200 rounded"
            >
              <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                <span className="text-sm font-medium">Toggle Filters</span>

                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <form
                action=""
                className="border-t border-gray-200 lg:border-t-0"
              >
                <fieldset>
                  <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-300">
                    Type
                  </legend>

                  <div className="px-5 py-6 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="ml-3 text-sm font-medium">Toy</span>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="ml-3 text-sm font-medium">Game</span>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="outdoor"
                        type="checkbox"
                        name="type[outdoor]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="ml-3 text-sm font-medium">Outdoor</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-xs text-gray-500 underline"
                      >
                        Reset Type
                      </button>
                    </div>
                  </div>
                </fieldset>

                <div>
                  <fieldset>
                    <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-300">
                      Age
                    </legend>

                    <div className="px-5 py-6 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="3+"
                          type="checkbox"
                          name="age[3+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <span className="ml-3 text-sm font-medium">3+</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="8+"
                          type="checkbox"
                          name="age[8+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <span className="ml-3 text-sm font-medium">8+</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="12+"
                          type="checkbox"
                          name="age[12+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <span className="ml-3 text-sm font-medium">12+</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="16+"
                          type="checkbox"
                          name="age[16+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <span className="ml-3 text-sm font-medium">16+</span>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          className="text-xs text-gray-500 underline"
                        >
                          Reset Age
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                  <button
                    name="reset"
                    type="button"
                    className="text-xs font-medium text-gray-600 underline rounded"
                  >
                    Reset All
                  </button>

                  <button
                    name="commit"
                    type="button"
                    className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline">Showing</span>6 of 24
                Products
              </p>

              <div className="ml-4">
                <span className="sr-only">Sort</span>

                <select
                  id="SortBy"
                  name="sort_by"
                  className="text-sm border-gray-100 rounded"
                >
                  <option>Sort</option>
                  <option value="title-asc">Title, A-Z</option>
                  <option value="title-desc">Title, Z-A</option>
                  <option value="price-asc">Price, Low-High</option>
                  <option value="price-desc">Price, High-Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px mt-4 bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>

              <a
                href="/product/build-your-own-drone"
                className="relative block bg-white"
              >
                <button
                  type="button"
                  name="wishlist"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <img
                  loading="lazy"
                  alt="Build Your Own Drone"
                  className="object-contain w-full h-56 lg:h-72"
                  src="https://www.hyperui.dev/photos/toy-1.jpeg"
                />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                    New
                  </span>

                  <h5 className="mt-4 text-lg font-bold">
                    Build Your Own Drone
                  </h5>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    $14.99
                  </p>

                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                  >
                    <span className="text-sm font-medium">Add to Cart</span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
