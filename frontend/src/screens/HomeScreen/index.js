import React, { Fragment, useEffect } from 'react'
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
import { showImageCarousel } from '../../components/Assets/Constants'
import AboutScreen from '../AboutScreen'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <div style={{ maxWidth: '700px', margin: 'auto' }}>
        <Meta />
        <CTA />
        <AboutScreen />
        {!keyword ? (
          showImageCarousel && <ProductCarousel />
        ) : (
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
        )}
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Fragment>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} m2={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Fragment>
        )}
      </div>
    </>
  )
}

export default HomeScreen
