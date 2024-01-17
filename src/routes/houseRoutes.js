import express from 'express'
import { housesController } from '../controllers/housesController'

export const houseRoutes = express.Router()

houseRoutes.get('/getHouses', housesController)
houseRoutes.get('/getHouse/:houseId', housesController)
houseRoutes.post('/saveHouse', housesController)
houseRoutes.patch('/patchHouse/:houseId', housesController)
houseRoutes.delete('/deleteHouse', housesController)