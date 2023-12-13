let mongoose = require('mongoose')
let Schema = mongoose.Schema

let foodCategorySchema = Schema ({
  name: String,
  description: String,
  price: Number
})

module.exports = mongoose.model('categoryFood',foodCategorySchema, 'foodCategory')