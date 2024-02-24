import multer from 'multer'
import express from 'express'
import { housesController } from '../controllers/housesController'
import { multerController, multerControllerGet } from '../controllers/multerController'


const uploadMulter = multer({ dest: 'src/uploads/' })

export const houseRoutes = express.Router()

houseRoutes.get('/getHouses', housesController)
houseRoutes.get('/getHouse/:houseId', housesController)
houseRoutes.post('/saveHouse', housesController)
houseRoutes.patch('/patchHouse/:houseId', housesController)
houseRoutes.delete('/deleteHouse', housesController)

houseRoutes.post('/multerImage', uploadMulter.single('imageTest'), multerController)
houseRoutes.get('/multerImage/:imgName', multerControllerGet)
