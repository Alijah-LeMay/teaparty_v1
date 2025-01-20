import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Bootstrap
import { Row, Col, Container } from 'react-bootstrap'
// Redux
import { useDispatch } from 'react-redux'
// My Components
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Paginate from '../../components/Paginate'
import ProductCarousel from '../../components/ProductCarousel'
import Meta from '../../components/Meta'

const PrivacyScreen = ({ match }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>TheFancyFork.com Privacy Policy</h2>
              <p>
                This Privacy Policy describes how your personal information is
                collected, used, and shared when you visit or make a purchase
                from TheFancyFork.com (the Site).
              </p>
              <h2>WHAT PERSONAL INFORMATION WE COLLECT</h2>
              <p>
                When you visit the Site, we automatically collect certain
                information about your device, including information about your
                web browser, IP address, time zone, and some of the cookies that
                are installed on your device.
              </p>
              <p>
                Additionally, as you browse the Site, we collect information
                about the individual web pages or products that you view, what
                websites or search terms referred you to the Site, and
                information about how you interact with the Site. We refer to
                this automatically collected information as Device Information.
              </p>
              <p>
                We collect Device Information using the following technologies:
              </p>
              <p>
                Cookies are data files that are placed on your device or
                computer and often include an anonymous unique identifier.
              </p>
              <p>
                Log files track actions occurring on the Site, and collect data
                including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </p>
              <p>
                Mention all other tracking tools and/or technologies being used
                by your website.
              </p>
              <p>
                Also, when you make a purchase or attempt to make a purchase
                through the Site, we collect certain information from you,
                including your name, billing address, shipping address, payment
                information (including credit card numbers Mention all types of
                accepted payments, email address, and phone number.) This is
                called Order Information.
              </p>
              <p>
                Make sure you mention all other information that you collect.
              </p>
              <p>
                By Personal Information in this Privacy Policy, we are talking
                both about Device Information and Order Information.
              </p>
              <h2>HOW DO WE USE YOUR PERSONAL INFORMATION</h2>
              <p>
                We use the Order Information that we collect generally to fulfil
                any orders placed through the Site (including processing your
                payment information, arranging for shipping, and providing you
                with invoices and/or order confirmations).
              </p>
              <p>Additionally, we use this Order Information to:</p>
              <p>Communicate with you.</p>
              <p>Screen our orders for potential risk or fraud.</p>
              <p>
                We use the Device Information that we collect to help us screen
                for potential risk and fraud (in particular, your IP address),
                and more generally to improve and optimize our Site.
              </p>
              <h2>SHARING YOUR PERSONAL INFORMATION</h2>
              <p>
                We share your Personal Information with third parties to help us
                use your Personal Information, as described above.
              </p>
              <p>
                We also use Google Analytics to help us understand how our
                customers use TheFancyFork.com. How Google uses your Personal
                Information.
              </p>
              <p>
                Finally, we may also share your Personal Information to comply
                with applicable laws and regulations, to respond to a subpoena,
                search warrant or other lawful requests for information we
                receive, or to otherwise protect our rights.
              </p>
              <h2>BEHAVIOURAL ADVERTISING</h2>
              <p>
                We use your Personal Information to provide you with targeted
                advertisements or marketing communications we believe may be of
                interest to you.
              </p>
              <p>Mention opt-out links from external services such as:</p>
              <p>
                <a href='https://facebook.com'>Facebook</a>
              </p>
              <p>
                <a href='https://google.com'>Google</a>
              </p>
              <p>
                You can opt out of targeted advertising by contacting
                info@thewebdev.net
              </p>
              <h2>YOUR RIGHTS</h2>
              <p>
                Additionally, if you are a European resident we note that we are
                processing your information in order to fulfil contracts we
                might have with you (for example if you make an order through
                the Site), or otherwise to pursue our legitimate business
                interests listed above.
              </p>
              <p>
                Please note that your information will be transferred outside of
                Europe, including to Canada and the United States.
              </p>
              <h2>DATA RETENTION</h2>
              <p>
                When you place an order through the Site, we will maintain your
                Order Information for our records unless and until you ask us to
                delete this information.
              </p>
              <h2>MINORS</h2>
              <p>
                The Site is not intended for individuals under the age of 13. By
                signing up you affirm you are 13 years of age or older.
              </p>
              <h2>CHANGES</h2>
              <p>
                We may update this privacy policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal or regulatory reasons.
              </p>

              <h2>CONTACT INFORMATION</h2>
              <p>Legal Business Name: Billionaire Assets LLC</p>
              <p>Address: 8838 Ashley Park Ave., Las Vegas, NV. 89148</p>
              <p>
                If you have questions and/or require more information, do not
                hesitate to contact us info@thewebdev.net.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PrivacyScreen
