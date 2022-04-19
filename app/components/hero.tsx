import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="container">
      <div className="hero">
        <Link to="/produk">
          <img
            className="object-cover rounded-xl"
            src="https://media.graphassets.com/rCqg924JSGKiBSioqWny?_gl=1*112thay*_ga*MTE4NTgxMDE3OS4xNjUwMjY5MjA1*_ga_G6FYGSYGZ4*MTY1MDM0NTIxMi4zNi4xLjE2NTAzNDgxMjAuNTM."
            alt="hero-cover"
          />
        </Link>
      </div>
    </div>
  )
}
