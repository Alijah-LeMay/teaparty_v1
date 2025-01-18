import React from 'react'
// Assets
import logoSrc from '../Assets/logo.png'
import { logoImageStyle, logoText } from '../Assets/Constants'
// My Components

const Logo = ({ width }) => {
  return <img style={logoImageStyle} src={logoSrc} alt={logoText} />
}
export default Logo
