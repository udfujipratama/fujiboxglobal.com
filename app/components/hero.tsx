import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="container lg mb-8">
      <div className="hero">
        <Link to="/koleksi/idul-fitri-or-lebaran">
          <img
            className="object-cover rounded-xl"
            src="https://media.graphassets.com/kGDjy6KARruA0MeAFoaH?_gl=1*1f23h42*_ga*OTYxMjM0NjA0LjE2NDc4NDkwNDU.*_ga_G6FYGSYGZ4*MTY0OTA0NzcwNi4xMS4xLjE2NDkwNDc3MjIuNDQ."
            alt="hero-cover"
          />
        </Link>
      </div>
    </div>
  )
}
