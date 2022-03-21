import { FunctionComponent } from 'react'

interface WhatsAppCardProps {}

export const WhatsAppCard: FunctionComponent<WhatsAppCardProps> = () => {
  return (
    <div className="card card-side bg-green-300 text-green-700 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Leave us a message</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          incidunt beatae facilis dolor
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">Message us</button>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppCard
