import * as React from "react"

import Navigation from "./navigation"

import Logo from '../images/gatsby-icon.png'

const Header = () => (
  <header>
    <Navigation logo={Logo} />
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
