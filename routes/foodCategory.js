const { Router } = require('express')
const categoryController = require('../controllers/foodCategory')

const router = Router()

router.get('/', categoryController.getCategory)
router.get('/:id?', categoryController.getCategorys)
router.post('/save', categoryController.saveCategory)
router.put('/edit/:id?', categoryController.updateCategory)
router.delete('/delete/:id?', categoryController.deleteCategory)

 module.exports = router