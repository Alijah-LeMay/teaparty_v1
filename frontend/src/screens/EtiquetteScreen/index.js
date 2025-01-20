import React, { Fragment, useEffect } from 'react'

import classes from './EtiquetteScreen.module.css'
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
const EtiquetteScreen = ({ match }) => {
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
      <div className={classes.EtiquetteScreen}>
        <h5>Business Etiquette</h5>
        <span>
          <p>
            The Fancy Fork has engineered Business Etiquette workshops for
            clients who are transitioning into the workforce. Our training will
            help clients develop a strong personal presentation by honing
            desirable job interview skills, grasping the importance of written
            and verbal skills, and understanding proper protocol in order to
            make a favorable first impression. The Fancy Fork’s Business
            Etiquette Training presents these needed skills to foster in future
            employees an intrinsic desire to be the best. Establishing these
            skills will reap lifelong benefits assisting clients to achieve
            success in many areas of life.
          </p>
        </span>

        <div>
          <span>
            <h6>Professionalism:</h6>
            <p>
              Business etiquette training helps employees develop the skills and
              behaviors to conduct themselves professionally in various business
              settings. This includes greetings, introductions, communication
              skills (non-verbal and verbal), behavior in meetings, networking
              events, and other business interactions. Professionalism is highly
              valued in the business world, and mastering business etiquette can
              enhance an individual's reputation and credibility.{' '}
            </p>
          </span>
        </div>

        <div>
          <span>
            <h6>Strong relationships:</h6>
            <p>
              Business etiquette emphasizes the importance of building and
              maintaining positive relationships with clients, co-workers, and
              managers. Polite, respectful behavior and understanding cultural
              norms enable individuals to establish strong connections and
              create a favorable impression. Building rapport and trust through
              proper etiquette can lead to better business opportunities and
              partnerships.{' '}
            </p>
          </span>
        </div>
        <div>
          <span>
            <h6>International business:</h6>
            <p>
              With globalization, businesses are increasingly operating on an
              international scale. Respecting cultural differences in business
              practices and etiquette is essential for successful cross-cultural
              communication. Business etiquette training provides insights into
              global customs, traditions, and protocols, enabling individuals to
              navigate cultural nuances and avoid potential misunderstandings or
              offense.{' '}
            </p>
          </span>
        </div>
        <div>
          <span>
            <h6>Competitive advantage:</h6>
            <p>
              In today’s competitive business environment, having an edge can
              make a significant difference. Employers recognize the value of
              employees who can represent the company professionally and
              interact effectively with clients and stakeholders. Business
              etiquette training equips individuals to stand out from the
              competition and enhance the overall image of the organization.{' '}
            </p>
          </span>
        </div>
        <div>
          <span>
            <h6>Customer service excellence:</h6>
            <p>
              Business etiquette training emphasizes the importance of providing
              exceptional customer service. It equips individuals with the
              skills to handle customer interactions professionally, resolve
              conflicts, and exceed customer expectations. Positive customer
              experiences lead to customer loyalty, positive word-of-mouth, and
              business growth.{' '}
            </p>
          </span>
        </div>
        <div>
          <span>
            <h6>Enhanced teamwork and collaboration:</h6>
            <p>
              Business etiquette promotes respect, courtesy, and consideration
              for others. By fostering a positive and inclusive work
              environment, it improves teamwork and collaboration among
              colleagues. Proper communication, active listening, and effective
              conflict resolution are essential elements of business etiquette
              that contribute to a harmonious and productive workplace.{' '}
            </p>
          </span>
        </div>
        <div>
          <span>
            <h6>Confidence and presence:</h6>
            <p>
              Etiquette training instills confidence in individuals. This
              confidence translates into stronger communication, better
              leadership skills, and improved overall performance. A
              professional presence means understanding dress codes and the
              social mores of the workplace. As dress codes have relaxed,
              business casual has its own set of expectations. Though industries
              differ, business etiquette provides an explanation of what is
              appropriate and most importantly “why” it matters.{' '}
            </p>
          </span>
        </div>
        <p>
          Overall, business etiquette training is essential for employees
          entering the workforce because it enhances professionalism, builds
          relationships, facilitates cross-cultural communication, provides a
          competitive advantage, boosts confidence, improves teamwork, and
          contributes to excellent customer service. It is a valuable investment
          for individuals and organizations seeking to excel in the business
          world.{' '}
        </p>
      </div>
    </>
  )
}

export default EtiquetteScreen
