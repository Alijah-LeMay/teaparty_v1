import React from 'react'

// This document is to serve as global constants for the site. When making edits, this should be kept in mind so that future ecommerce sites can be easily be cloned and reformatted within this file alone.

// Strings

//color selector: https://coolors.co/generate
let logoText = 'SillyLillySlime.com'

//Product Carrousel,
let primaryColor = '#B7B6C2'
//Navbar,
let secondaryColor = '#4A6FA5'

let primaryTextColor = 'white'

let defaultShippingCost = 0

let defaultTitle = 'Welcome to SillyLillySlime'

let ctaH2Text = 'Book a slime event!'

let ctaDescText =
  'Silly Lilly Slime is handmade in Las Vegas nevada. We are a family owned and operated business. At Silly Lilly Slimes we sell slimes that are inspired by our creativity and fun. We create our slimes with the best quality ingredients. Buy one of our awesome Silly Lilly Slimes in our online shop today. New Slimes dropping monthly. We also offer full service parties and events. Have Silly Lilly Slime at your next event to have all the fun without the mess or stress! Create your Silly Lilly Slime and share it with us on our social media'

let ctaLink =
  'https://calendly.com/stephscaglione/notary-appointment?month=2024-10'

let ctaButtonText = 'Book Event'

let showCta = true

let logoImageStyle = {}

let logoImageBool = false

let singleImageCarousel = false

let instagramLink = 'https://instagram.com/sillylillyslime.lv'
let instagramLinkText = '@sillylillyslime.lv'

// Components
const CopyRight = () => {
  const year = new Date().getFullYear()

  return (
    <p>
      &copy; {year}
      <a href='//www.sillylillyslime.com'>Billionaire Assets LLC</a>
    </p>
  )
}

export {
  logoText,
  CopyRight,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  defaultShippingCost,
  defaultTitle,
  ctaH2Text,
  ctaDescText,
  ctaLink,
  ctaButtonText,
  showCta,
  logoImageStyle,
  logoImageBool,
  singleImageCarousel,
  instagramLink,
  instagramLinkText,
}
