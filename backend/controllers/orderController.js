import Order from '../models/orderModel.js'

import asyncHandler from 'express-async-handler'

import { SquareClient, SquareEnvironment } from 'square'

import Client from 'square'
// @desc        Create new order
// @route       POST /api/orders
// @access      PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
    return
  }
})

// @desc        Get order by id
// @route       GET /api/orders/:id
// @access      PRIVATE
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )
  if (order) {
    res.json(order)
    return
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})
// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
    return
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/squarepay
// @access  Private

const updateOrderToSquarePaid = asyncHandler(async (req, res) => {
  const client = new SquareClient({
    token: process.env.SQUARE_ACCESS_TOKEN_SANDBOX,
    environment: SquareEnvironment.Sandbox,
  })
  const order = await Order.findById(req.params.id)
  const { token } = req.body
  console.log(order)
  if (order && token) {
    try {
      const data = {
        sourceId: token,
        idempotencyKey: crypto.randomUUID(),
        amountMoney: {
          currency: 'USD',
          amount: BigInt(order.price * 100),
        },
      }
      // data.amountMoney.amount = amountInCents
      const result = await client.payments.create(data)
      console.log(result)
      res.status(200)
    } catch (error) {
      console.error('Error creating payment:', error)
      res.status(500).json({ error: 'Payment failed' })
    }

    order.isPaid = true
    order.paidAt = Date.now()
    // order.paymentResult = {
    //   id: req.body.id,
    //   status: req.body.status,
    //   update_time: req.body.update_time,
    //   email_address: req.body.payer.email_address,
    // }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
    return
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})
// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/ Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
    return
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })

  res.json(orders)
  return
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private / Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')

  res.json(orders)
  return
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  updateOrderToSquarePaid,
}
