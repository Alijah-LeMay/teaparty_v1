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

const TheFounderScreen = ({ match }) => {
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
      <div className={classes.TheFounderScreen}>
        <h5>About us</h5>
        <p>
          Deborah Martin Owens is an Alabama-raised mother, teacher, speaker,
          and purveyor of all things Southern and effortless. Growing up in
          Enterprise, Alabama, Deborah was fortunate to be surrounded by grand
          women who loved even grander things!
        </p>
        <p>
          Hospitality accompanied by sincere affection were the two ingredients
          that formed the foundation for easy, elegant, and memorable
          gatherings. Parties, get togethers, leisurely lunches, and spectacular
          events were marked by subtle graciousness and an unforgettable
          attention to detail that resulted in the most important aspect of
          hospitality: making everyone feel significant.
        </p>
        <p>
          Having a mother who instilled in her that being kind was much easier
          than being unkind and that politeness and respect were not obligations
          but purposeful intentions, Mrs. Deborah works with clients to develop
          an ease of intrinsic politeness, helpfulness, and charm.
        </p>
        <p>
          Through tea parties, The Etiquette Academy as well as online and
          in-person cooking classes, Mrs. Deborah fosters an intentional
          hospitality that is both natural and free-flowing. A quote that you
          will often hear from Mrs. Deborah is, “Good manners open closed doors,
          and bad manners close open ones.”
        </p>
        <p>
          Mrs. Deborah has designed a curriculum for The Etiquette Academy that
          is both traditional and contemporary. An educator for the past 34
          years, Mrs. Deborah worked with WeeCats Preschool administrators to
          develop WeeCat Industries in 2017. WeeCat Industries is a curriculum
          that focuses on acquiring business etiquette skills that advance
          interpersonal communication, listening skills, time management,
          problem-solving, leadership, and empathy among others.
        </p>
        <p>
          These are among the top skills commonly sought by employers in the
          candidates they hire because soft skills are important for just about
          every job. The structure of society may have changed, but its social
          expectations have not, and Mrs. Deborah helps students of all ages
          fill in the missing pieces to become more confident. Confidence breeds
          leadership, and etiquette training lasts forever.
        </p>
        <p>
          You’ve never heard anyone say, “He is just too polite.” Everyone likes
          a person who exhibits kindness and polite manners. Sometimes without
          knowing why exactly, we may have an instant respect and admiration for
          someone we meet.
        </p>
        <p>
          Ninety-nine percent of the time that person whom we are drawn to,
          trust, and want to follow possesses and expresses good manners. Do
          your children a favor and cultivate that charm, graciousness, and
          confidence by starting your child with The Fancy Fork Contemporary
          Etiquette courses.
        </p>
      </div>
    </>
  )
}

export default TheFounderScreen
