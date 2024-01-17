import houseSchema from "../models/houseSchema"

export const housesController = async (req, res) => {

  const { id, address, incharge, bedrooms, bathrooms, livingrooms, familyrooms, abilite, area, services, description, price, pets, estrato, floor, carpark, district, city, state, type, unitname, pictures, likes } = req.body

  const { actiontype } = req.headers
  const { houseId } = req.params

  const prettyPrice = (price) => {
    if(price){
      price = price.toString()
      let newPrice = 0
      switch(price.length){
        case 7:
          newPrice = price/1000000
          return `${ newPrice }M`
        case 6:
          newPrice = price/1000
          return `${ newPrice }K` 
        default:
          return 'errorPrice'
      }
    }
  }

  const structureHouse = houseSchema({
    id, address, incharge, bedrooms, bathrooms, livingrooms, familyrooms, abilite, area, services, description, price: prettyPrice(price), pets, estrato, floor, carpark, district, city, state, type, unitname, pictures, likes
  })

  const findHouse = () => {
    if (!houseId) {
      houseSchema
        .findOne({ address })
        .then(data => {
          if (!data) {
            saveHouse()
          } else {
            res.status(200).json({ message: 'dataExist' })
          }
        })
        .catch(err => {
          res.status(500).json(err)
        })
    } else {
      return houseSchema
        .findOne({ id: houseId })
        .then(data => {
          if (!data) {
            res.status(404).json({ message: 'notFound' })
          } else {
            return ({
              status: true,
              data: data
            })
          }
        })
        .catch(err => {
          res.status(500).json(err)
        })
    }
  }

  const saveHouse = () => {
    structureHouse
      .save()
      .then(() => {
        res.status(201).json({ saved: true })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  const updateHouse = () => {
    res.status(200).json({ message: 'updating' })
  }

  switch (actiontype) {
    case 'saveHouse':
      findHouse()
      break

    case 'getHouses':
      houseSchema
        .find()
        .then(data => {
          res.status(200).json(data)
        })
        .catch(err => {
          res.status(500).json(err)
        })
      break

    case 'getHouse':
      findHouse()
        .then(resp => {
          if (resp) {
            res.status(200).json(resp.data)
          }
        })
      break

    case 'patchHouse':
      findHouse()
        .then(resp => {
          if (resp) {
            updateHouse()
          }
        })
        .catch(err => {
          console.log(err)
        })
      break

    default:
      res.status(404).json({ message: 'acción no valida' })
  }

}