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
            src="https://media.graphassets.com/1kMB4AxHQZCHXPmHGwJh?_gl=1*htehi0*_ga*MzMyNjYxNjAxLjE2NTIwNjk2NTE.*_ga_G6FYGSYGZ4*MTY1Mjc2Nzk2MS43LjEuMTY1Mjc2OTgyOS41Nw."
            alt="hero-cover"
          />
        </Link>
      </div>
    </div>
  )
}
