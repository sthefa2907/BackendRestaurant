const express = require('express')
const food_routes = require('./routes/food')
const category_routes = require('./routes/foodCategory')

const app = express()


app.set('port', process.env.PORT || 5000)


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/food', food_routes)
app.use('/api/foodCategory', category_routes)
module.exports = app