import { FunctionComponent } from 'react'

import { Footer, Navbar } from '~/components'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      <div className="mx-4">{children}</div>
      <Footer />
    </div>
  )
}
