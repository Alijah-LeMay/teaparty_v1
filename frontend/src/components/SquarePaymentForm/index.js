import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import { squarePayOrder } from '../../store/actions/orderActions'
import axios from 'axios'

const SquarePaymentForm = ({ success, orderId }) => {
  const [squareData, setSquareData] = useState({})
  const dispatch = useDispatch()

  const handlePayment = async (token) => {
    // Send the token to your backend to process the payment
    console.log('Payment token:', token)
    console.log('payment handler triggered')
    console.log(token.status)
    if ((token.status = 'OK')) {
      dispatch(squarePayOrder(orderId, token))
    }
  }
  // const accessSquareInfo = async () => {
  //   const { data } = await axios.get('/api/config/square')
  //   setSquareData(data)

  //   return data
  // }
  // useEffect(() => {
  //   accessSquareInfo()
  // }, [])

  console.log(squareData)

  // const { data } = await axios.get('/api/config/square')
  // console.log(data)

  //   SQUARE_APP_ID_PRODUCTION
  // SQUARE_LOCATION_ID_PRODUCTION
  // SQUARE_APP_ID_SANDBOX
  // SQUARE_LOCATION_ID_SANDBOX

  return (
    <>
      <PaymentForm
        applicationId='sandbox-sq0idb-ohPdug2VtW0Pn0nspgDIlg'
        locationId='LD9D76WKP8PMR'
        cardTokenizeResponseReceived={async (token) => {
          handlePayment(token)
        }}
      >
        <CreditCard />
      </PaymentForm>
    </>
  )
}

export default SquarePaymentForm
