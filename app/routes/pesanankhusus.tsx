import { FunctionComponent } from 'react'

interface PesananKhususProps {}

export const PesananKhusus: FunctionComponent<PesananKhususProps> = () => {
  return (
    <div className="container">
      <div className="flex gap-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <input
                type="button"
                value="Buy Now"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <input
                type="button"
                value="Buy Now"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PesananKhusus
