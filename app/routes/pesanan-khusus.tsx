import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { PesananKhususFAQ } from '~/contents'

interface PesananKhususProps {}

export const PesananKhusus: FunctionComponent<PesananKhususProps> = () => {
  return (
    <div className="container">
      <div className="hero h-300 bg-base-200 mb-4">
        <div className="hero-content text-center flex ">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-left">Hello there</h1>
            <p className="py-6 text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <PesananKhususFAQ />
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-10 text-left">
        Pesanan khusus
      </h1>
      <div className="flex justify-around">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              FUJIBOX KRAFT | GABLE BOX JAR 2 | DUS SPECIAL FUJI
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to="/pesanan-khusus-detail" className="btn btn-primary">
                Lihat produk
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              FUJIBOX KRAFT | GABLE BOX JAR 2 | DUS SPECIAL FUJI
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to="/pesanan-khusus-detail" className="btn btn-primary">
                Lihat produk
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              FUJIBOX KRAFT | GABLE BOX JAR 2 | DUS SPECIAL FUJI
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to="/pesanan-khusus-detail" className="btn btn-primary">
                Lihat produk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PesananKhusus
