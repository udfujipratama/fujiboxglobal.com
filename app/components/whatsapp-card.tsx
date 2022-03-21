import { FunctionComponent } from 'react'

interface WhatsAppCardProps {}

export const WhatsAppCard: FunctionComponent<WhatsAppCardProps> = () => {
  return (
    <div className="card card-side bg-whatsapp text-white shadow-xl max-w-4xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title text-3xl mb-2">
              Kontak kami via WhatsApp
            </h2>
            <p className="max-w-xl">
              Memudahkan Anda untuk berkomunikasi dengan tim kami.
            </p>
          </div>
          <div>
            <button className="btn gap-2 bg-white hover:bg-slate-100 text-whatsapp">
              WhatsApp Kami
              <span>(WA)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppCard
