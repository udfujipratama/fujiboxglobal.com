import { FunctionComponent } from 'react'
import { GrInstagram } from 'react-icons/gr'

interface InstagramCardProps {}

export const InstagramHero: FunctionComponent<InstagramCardProps> = () => {
  return (
    <div className="container">
      <div className="hero min-h-screen shadow-2xl">
        <div className="hero-content flex-col gap-1">
          <div className="mt-20 mb-20">
            <h1 className="text-4xl text-center md:text-5xl font-bold">
              Kami hadir di Instagram !
            </h1>
            <a
              href="https://www.instagram.com/fujiboxglobal/?hl=en"
              className="btn btn-block gap-4 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-lg md:text-xl">Follow us </span>
              <span className="text-lg md:text-xl mb-1">
                <GrInstagram />
              </span>
            </a>
          </div>
          <iframe
            className="w-full aspect-[4/3] mb-4"
            title="instagram-card"
            src="https://embedsocial.com/facebook_album/pro_hashtag/bf5e9745e763f521063fc73ea47cb1e1bcc2202c"
            width="1200"
            height="1500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          />
        </div>
      </div>
    </div>
  )
}
