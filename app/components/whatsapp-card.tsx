import { FunctionComponent } from 'react'

interface WhatsAppCardProps {}

export const WhatsAppCard: FunctionComponent<WhatsAppCardProps> = () => {
  return (
    <div className="card card-side bg-green-300 text-green-700 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/movie?w=200&h=280"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Leave us a message</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          incidunt beatae facilis dolor
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-whatsapp hover:bg-whatsapp">
            Message us
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppCard
