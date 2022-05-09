import { FunctionComponent } from 'react'

import { Footer, NavbarHyper } from '~/components'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarHyper />
      <div className="mx-4">{children}</div>
      <Footer />
    </div>
  )
}
