import React from 'react'
import { Helmet } from 'react-helmet'
import { defaultTitle } from '../Assets/Constants'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: defaultTitle,
}

export default Meta
