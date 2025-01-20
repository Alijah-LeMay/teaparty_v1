import React from 'react'

// This document is to serve as global constants for the site. When making edits, this should be kept in mind so that future ecommerce sites can be easily be cloned and reformatted within this file alone.

// Strings

//color selector: https://coolors.co/generate
let logoText = ''

//Product Carrousel,
let primaryColor = '#B7B6C2'
//Navbar,
let secondaryColor = '#4A6FA5'

let primaryTextColor = 'white'

let defaultShippingCost = 0

let defaultTitle = 'Welcome to The Fancy Fork'

let ctaH2Text = 'Afternoon Tea at The Fancy Fork is an enchanting experience.'

let ctaDescText =
  ' Book a private tea and invite your family and friends for a lovely party in an atmosphere which combines British elegance with Southern charm. Wear your own tea hat or borrow one of ours. We aim to dazzle you with our fine china, premium teas, and delicious delicacies. Included in the tea party is a mini-etiquette lesson to ensure all are equipped for the opulence of a true British tea. . . with a Southern flair. Few opportunities afford the indulgence of a tea party tablescape with delicate china, towers of pastries, scones, and petit gateaux accompanied by luxe pots of our signature teas. Our unique Tea Parties are offered seasonally and by private bookings.'

let aboutUsh1 = 'Who: '
let aboutUsp1 =
  'The Fancy Fork can accommodate up to 15 participants at one table or up to 21 at two tables in adjacent dining rooms.   '

let aboutUsh2 = 'What: '
let aboutUsp2 =
  'Teas include a mini-etiquette tea history lesson followed by a tasting of three teas and the presentation of a tiered cake stand to include scones, British bakes, and lavish desserts. The tea party lasts up to two hours, allowing enough time to savor each scrumptious moment. '

let aboutUsh3 = 'Occasion:'
let aboutUsp3 =
  'Talk to us about Birthday Parties, Bridesmaid Luncheons, Retirement Teas, Baby Showers, Bridal Showers, Girl Gatherings, and Sunday School Adventures. For Young Girl (Queens-in-Training) birthday tea parties, both hot and cold teas are served. '

let aboutUsh4 = 'Cost: '
let aboutUsp4 = `Traditional Teas are $350 for up to 10 guests and $30 per guest over ten. 
  \n Seasonal Tea offerings vary. Check out the website for dates, themes, and cost.`

let aboutUsh5 = ''
let aboutUsp5 = ''

let aboutUsh6 = 'Convenience: '
let aboutUsp6 =
  'The Fancy Fork offers walk in and walk out enjoyment for hostesses of events.  All set up and clean up are included.   '

let aboutUsh7 = 'Customization:'
let aboutUsp7 =
  'The Fancy Fork offers personalized add-ons to our Signature Afternoon Teas–Birthday Cakes, Goody Bags, and Tea Treat Trays for Ladies-in-Waiting (Guests waiting on tea participants). We also offer specific bake requests.  Peruse a large variety of treats at our Fancy Fork Bake Shop. The Fancy Fork also provides a beautifully decorated birthday cake available for your tea party for an additional fee.  '

let ctaLink = ''

let ctaButtonText = 'Book Event'

let showCta = true

let logoImageStyle = { maxWidth: '200px' }

let logoImageBool = true

let singleImageCarousel = false

let instagramLink = ''
let instagramLinkText = 'instagram Text'

let showImageCarousel = false

// Components
const CopyRight = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <p>
        &copy; {year} <a href='//www.thefancyfork.com'>The Fancy Fork</a>
      </p>

      <p>
        Built with love by <a href='//www.thewebdev.net'>The Web Dev's</a>
      </p>
    </>
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
  showImageCarousel,
  aboutUsh1,
  aboutUsp1,
  aboutUsh2,
  aboutUsp2,
  aboutUsh3,
  aboutUsp3,
  aboutUsh4,
  aboutUsp4,
  aboutUsh5,
  aboutUsp5,
  aboutUsh6,
  aboutUsp6,
  aboutUsh7,
  aboutUsp7,
}
