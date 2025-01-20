import React, { Fragment, useEffect } from 'react'

import classes from './EtiquetteAcademyClassScreen.module.css'
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

const EtiquetteAcademyClassScreen = ({ match }) => {
  // const keyword = match.params.keyword

  // const pageNumber = match.params.pageNumber || 1
  // const dispatch = useDispatch()

  // const productList = useSelector((state) => state.productList)
  // const { loading, error, products, page, pages } = productList

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber))
  // }, [dispatch, keyword, pageNumber])

  return (
    <>
      <div className={classes.EtiquetteAcademyClassScreen}>
        <h5>Etiquette Academy</h5>
        <p>
          The Etiquette Academy offered through The Fancy Fork is a class
          designed to help plant the seeds of etiquette and appropriate table
          manners. Participants will focus on manners and why they are
          important. The fundamentals of etiquette are learning basic skills
          necessary for healthy, polite, thoughtful, and appropriate
          interactions with people. The class will focus on being hospitable,
          kind, respectful, and grateful. Participants will learn the importance
          of a good first impression, how to greet others, as well as the skills
          needed to be a good guest and host. Participants will also learn to
          appreciate the art of being thankful, how to show empathy, and how
          kindness brings confidence.
        </p>
        <p>
          The Etiquette Academy will consist of classes that take an indepth
          look at proper table settings and manners for dining casually,
          formally, and in small and large settings. Participants will learn the
          purpose of each utensil, how to set the table, the art of table
          conversation, how to be a good host and how to be a gracious guest as
          well as other social skills that will build confidence and instill
          effective, lifelong habits. Participants will practice proper basic
          manners such as making introductions, learning the rules for passing
          items at the table, mastering utensil use for each course as well as
          eating tricky foods, all to help participants create a positive
          lasting impression. Just as important, participants will learn what is
          NOT acceptable.
        </p>
        <p>
          Additionally, participants will learn proper napkin usage and the
          purpose and placement of tableware that may be unfamiliar.
          Participants will be able to respond to digital and written
          invitations, learn how to compose a thoughtful thank you note, and
          will learn appropriate digital manners for emails and text. Time
          management, developing networking skills, and creating good
          impressions will be cemented through confidence-building instruction,
          role-playing, and actual hands-on use of tableware to promote mastery
          of etiquette in real life settings.
        </p>
        <p>
          At the conclusion of this series, participants will be able to do the
          following:
        </p>
        <p>
          Set a table in casual and formal settings, placing correct flatware,
          dishes, stemware, and linens.
        </p>
        <p>
          Identify basic and secondary utensils and their use, including proper
          knife cutting.
        </p>
        <p>
          Choose appropriate dress for varied occasions and master attractive
          grooming habits.
        </p>
        <p>
          Differentiate between acceptable and unacceptable actions before,
          during, and after meal time.
        </p>
        <p>
          Learn the rules and protocols for eating meals in courses and in
          buffet-style presentations.
        </p>
        <p>
          Acquire the ability to conduct appropriate table conversation and know
          what topics to avoid.
        </p>

        <p>
          Become versed in the best practices for being a guest and host,
          including learning the proper way to accept invitations.
        </p>
        <p>
          Discern how to make a good first impression, noting mistakes to avoid
          during introductions.
        </p>
        <p>Know how to succeed with an elevated etiquette IQ.</p>
      </div>
    </>
  )
}

export default EtiquetteAcademyClassScreen
