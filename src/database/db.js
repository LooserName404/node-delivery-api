import mongoose from 'mongoose'

const url = process.env.DB_CONNECTION_STRING

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default mongoose
