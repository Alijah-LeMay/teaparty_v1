import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
// when using IMPORT syntax with express, files must have .js. Libraries do not.
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

// config route for paypal
app.get('/api/config/paypal', (req, res) => {
  if (
    process.env.NODE_ENV === 'PRODUCTION' ||
    process.env.NODE_ENV === 'production'
  ) {
    res.send(process.env.PAYPAL_LIVE_ID)
    console.log('using live paypal id')
    return
  }
  console.log('using test paypal id')
  res.send(process.env.PAYPAL_TEST_ID)
  return
})

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    return
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
    return
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5057

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
