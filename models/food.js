let mongoose = require('mongoose')
let Schema = mongoose.Schema

let FoodSchema = Schema ({
  name: String,
  description: String,
  price: Number
})

module.exports = mongoose.model('Food',FoodSchema, 'Food')