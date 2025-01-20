import React, { Fragment, useEffect } from 'react'

import classes from './AfternoonTeaScreen.module.css'
import { Link } from 'react-router-dom'
// Bootstrap
import { Row, Col } from 'react-bootstrap'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../store/actions/productActions'
// My Components

const AfternoonTeaScreen = ({ match }) => {
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
      <div className={classes.AfternoonTeaScreen}>
        <h5>Afternoon Tea</h5>
        <p>
          Afternoon Tea at The Fancy Fork is a unique and enchanting experience.
          Book a private tea and invite your family and friends for a fun tea
          party in a fun, lavish, and lovely atmosphere that combines British
          elegance with Southern charm. Wear your own tea hat or borrow one of
          ours. We aim to dazzle you with our fine china, premium teas, and
          delicious tea treats, accompanied by a mini-etiquette lesson to make
          sure that you are prepared for the opulence of a true British tea with
          a Southern flair. There are few truer indulgences than a tea party
          tablescape filled with delicate china, towers of pastries, scones, and
          mini desserts accompanied by luxe pots of our signature teas. Our
          signature Tea Parties are offered seasonally and by private bookings.
        </p>
        <p>
          The Fancy Fork can accommodate up to 15 participants at one table or
          up to 21 at two tables.
        </p>
        <p>
          Teas include a mini-etiquette tea history lesson followed by a tea
          tasting of 3 teas, and presentation of a tea tier to include scones,
          British bakes, and luxe desserts and time to savor and enjoy a true
          British Tea lasting up to 2 hours.
        </p>
        <p>
          Group Teas are $350 for up to 10 guests and $30 per guest over ten.
        </p>
        <p>
          Seasonal Teas vary. Check out the website for dates, themes, and cost.
        </p>
        <p>
          Talk to us about Birthday Parties, Bride’s Maid Luncheons, Retirement
          Teas, Baby Showers, Bridal showers, Girl Gatherings, and Sunday School
          Adventures.
        </p>
        <p>
          The Fancy Fork offers walk in and walk out enjoyment for hostesses of
          events. All set up and clean up are included.
        </p>
        <p>
          The Fancy Fork offers a variety of add ons to our Signature Afternoon
          Teas to include:
        </p>
        <p>Birthday Cakes-</p>
        <p>Goody Bags</p>

        <p>
          Tea Treat Trays for Ladies in Waiting (Guest waiting on tea
          participants).
        </p>
        <p>
          Talk to us about specific bakes-we offer a large variety of choices
          through the Fancy Fork Bake Shop.
        </p>
        <p>
          We offer Little Girl’s tea party birthdays, Queen’s gatherings to
          include Sunday Schools, Birthday Parties, as well as baby showers, and
          bridal teas.
        </p>
      </div>
    </>
  )
}

export default AfternoonTeaScreen
