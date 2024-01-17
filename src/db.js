import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_URL = process.env.mongoDB_URL

export const mongoConnection = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log('db_connection OK')
    })
    .catch((err) => {
      console.log('db_connection erR0r...')
    })
}
