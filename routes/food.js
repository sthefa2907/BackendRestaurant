const { Router } = require('express')
const FoodController = require('../controllers/food')

const router = Router()

router.get('/', FoodController.getFoods)
router.get('/:id?', FoodController.getFood)
router.post('/save', FoodController.saveFood)
router.put('/edit/:id?', FoodController.updateFood)
router.delete('/delete/:id?', FoodController.deleteFood)

module.exports = router