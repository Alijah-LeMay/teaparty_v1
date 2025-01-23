import React from 'react'
import {
  ctaDescText,
  ctaH2Text,
  ctaLink,
  ctaButtonText,
  secondaryColor,
  showCta,
  instagramLink,
  instagramLinkText,
  showInstagramLink,
} from '../Assets/Constants'

const CTA = () => {
  if (showCta) {
    return (
      <div className='row m-auto w-100 text-center py-2'>
        <div className='col m-auto w-100'>
          <h2 className='m-auto'>{ctaH2Text}</h2>
          {showInstagramLink && (
            <>
              <div className='m-auto'>
                <p>
                  {ctaDescText}{' '}
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={instagramLink}
                  >
                    {instagramLinkText}
                  </a>
                </p>
              </div>
            </>
          )}

          <div className='m-auto'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ backgroundColor: secondaryColor }}
              class='btn btn-primary m-auto'
              href={ctaLink}
            >
              {ctaButtonText}
            </a>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default CTA
