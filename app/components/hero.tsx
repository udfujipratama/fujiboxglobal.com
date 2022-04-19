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
            src="https://media.graphassets.com/K6pIb7yGT56oclM0hsX3?_gl=1*rjgnx9*_ga*MTE4NTgxMDE3OS4xNjUwMjY5MjA1*_ga_G6FYGSYGZ4*MTY1MDM0NTIxMi4zNi4xLjE2NTAzNDcxODUuNDE."
            alt="hero-cover"
          />
        </Link>
      </div>
    </div>
  )
}
