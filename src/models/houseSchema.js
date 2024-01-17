import { Schema, model } from 'mongoose'

const houseSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  incharge: {
    type: String,
    require: true
  },
  bedrooms: {
    type: Number,
    require: true
  },
  bathrooms: {
    type: Number,
    require: true
  },
  livingrooms: {
    type: Number,
    require: true
  },
  familyrooms: {
    type: Number,
    require: true
  },
  ability: {
    type: Number,
    require: true
  },
  area: {
    type: Number,
    require: true
  },
  services: {
    type: Array,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  pets: {
    type: Boolean,
    require: true
  },
  estrato: {
    type: Number,
    require: true
  },
  floor: {
    type: Number,
    require: true
  },
  carpark: {
    type: Boolean,
    require: true
  },
  district: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  unitname: {
    type: String,
    require: true
  },
  pictures: {
    type: Array,
    require: true
  },
  likes: {
    type: String,
    require: true
  }
})

export default model('houses', houseSchema)