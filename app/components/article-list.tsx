import { FunctionComponent } from 'react'

interface ArticleListProps {}

export const ArticleList: FunctionComponent<ArticleListProps> = () => {
  return (
    <div className="container mb-8">
      <article className="prose mb-4">
        <h1>Edukasi pembeli</h1>
      </article>
      <div className="bg-white w-50 mx-auto mb-4 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div className="h-90 w-500px sm:h-full sm:w-72 rounded-xl ">
          <img
            className="mx-auto object-cover"
            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="article-cover"
          />
        </div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="w-full h-6 rounded-2xl">
              <article className="prose">
                <h2>Title</h2>
              </article>
            </div>
            <div className=" w-full  h-3 rounded-2xl">
              <article className="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem deleniti nemo sint! Labore quam explicabo ab ea vitae
                  nam. Nulla omnis ipsum nam. Omnis assumenda, veritatis ab
                  itaque blanditiis officia!
                </p>
              </article>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Jean Jacques</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-50 mx-auto mb-4 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div className="h-90 w-500px sm:h-full sm:w-72 rounded-xl ">
          <img
            className="mx-auto object-cover"
            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="article-cover"
          />
        </div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="w-full h-6 rounded-2xl">
              <article className="prose">
                <h2>Title</h2>
              </article>
            </div>
            <div className=" w-full  h-3 rounded-2xl">
              <article className="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem deleniti nemo sint! Labore quam explicabo ab ea vitae
                  nam. Nulla omnis ipsum nam. Omnis assumenda, veritatis ab
                  itaque blanditiis officia!
                </p>
              </article>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Jean Jacques</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-50 mx-auto mb-4 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div className="h-90 w-500px sm:h-full sm:w-72 rounded-xl ">
          <img
            className="mx-auto object-cover"
            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="article-cover"
          />
        </div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="w-full">
              <article className="prose">
                <h2>Title</h2>
              </article>
            </div>
            <div className=" w-full">
              <article className="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem deleniti nemo sint! Labore quam explicabo ab ea vitae
                  nam. Nulla omnis ipsum nam. Omnis assumenda, veritatis ab
                  itaque blanditiis officia!
                </p>
              </article>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Jean Jacques</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
