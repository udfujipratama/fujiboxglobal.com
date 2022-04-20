import { Link, useCatch } from 'remix'

export const NotFoundPage = () => {
  const caught = useCatch()
  let message

  switch (caught.status) {
    case 401:
      message = (
        <div>
          <p>Sorry, you don't have access to this page</p>
        </div>
      )
      break
    case 404:
      message = (
        <div>
          <p>Maaf halaman ini tidak ditemukan</p>
        </div>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }
  return (
    <div className="container mx-auto h-screen  md:pt-0 px-6 z-10 flex items-center justify-between">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
        <div className="w-full flex flex-col items-center mb-16 md:mb-8 text-center lg:text-left">
          <h1 className="text-center text-3xl lg:text-5xl mt-12 md:mt-0 text-gray-700">
            {message}
          </h1>
          <Link
            to="/"
            className="btn btn-sm lg:btn-md btn-primary mt-16 font-light text-center text-white 2 focus:outline-none"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
