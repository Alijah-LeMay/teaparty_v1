import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_URI}/?retryWrites=true&w=majority&appName=Cluster0`,
      {
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold)
    process.exit(1)
  }
}
export default connectDB
