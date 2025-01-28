import React, { Fragment, useEffect } from 'react'

import classes from './AboutScreen.module.css'
import { Link } from 'react-router-dom'
// Bootstrap
import { Row, Col } from 'react-bootstrap'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../store/actions/productActions'
// My Components
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Paginate from '../../components/Paginate'
import ProductCarousel from '../../components/ProductCarousel'
import Meta from '../../components/Meta'
import CTA from '../../components/CTA'
import {
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
  showImageCarousel,
} from '../../components/Assets/Constants'

const AboutScreen = ({ match }) => {
  // const keyword = match.params.keyword

  // const pageNumber = match.params.pageNumber || 1
  // const dispatch = useDispatch()

  // const productList = useSelector((state) => state.productList)
  // const { loading, error, products, page, pages } = productList

  let aboutContentArray = [
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
  ]

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber))
  // }, [dispatch, keyword, pageNumber])

  return (
    <>
      <div className={classes.aboutScreen}>
        <span style={{ height: '140px' }}>
          <p>{aboutUsh1}</p>
          <p>{aboutUsp1}</p>
        </span>
        <span style={{ height: '180px' }}>
          <p>{aboutUsh2}</p>
          <p>{aboutUsp2}</p>
        </span>
        <span style={{ height: '180px' }}>
          <p>{aboutUsh3}</p>
          <p>{aboutUsp3}</p>
        </span>
        <span style={{ height: '0px' }}>
          <p>{aboutUsh4}</p>
          <p>{aboutUsp4}</p>
        </span>
        <span style={{ height: '140px' }}>
          <p>{aboutUsh5}</p>
          <p>{aboutUsp5}</p>
        </span>
        <span style={{ height: '140px' }}>
          <p>{aboutUsh6}</p>
          <p>{aboutUsp6}</p>
        </span>
        <span style={{ height: '260px' }}>
          <p>{aboutUsh7}</p>
          <p>{aboutUsp7}</p>
        </span>
      </div>
    </>
  )
}

export default AboutScreen
