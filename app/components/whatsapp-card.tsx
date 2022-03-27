import { FunctionComponent } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

interface WhatsAppCardProps {}

export const WhatsAppCard: FunctionComponent<WhatsAppCardProps> = () => {
  return (
    <div className="container mb-8">
      <div className="card card-side bg-whatsapp text-white shadow-xl ">
        <div className="card-body">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="card-title text-center text-3xl mb-2">
                Ingin terhubung langsung dengan marketing kami?
              </h2>
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6281291071355"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-wide gap-2 bg-white hover:bg-slate-100 text-whatsapp"
              >
                Tanya Fujibox
                <span>
                  <IoLogoWhatsapp />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppCard
