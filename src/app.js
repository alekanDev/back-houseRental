import { mongoConnection } from "./db"
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'
import { houseRoutes } from "./routes/houseRoutes"

const app = express()
const PORT = process.env.serverPORT

export const serverListening = () => {
  app.listen(PORT, () => {
      console.log(`server OK on PORT ${ PORT }`)
  })
  mongoConnection()
  
}

app.use(cors())
app.use(express.json({ limit: '10mb'}))
app.use(morgan('dev'))
app.use(houseRoutes)

