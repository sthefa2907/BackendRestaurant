let categoryFood = require('../models/foodCategory')

//Mostrar
const controller = {
    getCategory: function (req, res) {
    categoryFood.find({}).exec()
      .then(categoryList => {
        if (!categoryList) return res.status(404).send({message: "Datos no encontrados"})
        return res.status(200).json(categoryList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
//Detalle
  getCategorys: function (req, res) {
    let categoryId = req.params.id
    if (categoryId == null) return res.status(404).send({message: "show not found"})

    categoryFood.findById(categoryId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Show not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
//Guardar
  saveCategory: function (req, res) {
    let categorys = new categoryFood()
    const {name, description, price} = req.body
    if (name ) {
      categorys.name = name
      
      
      categorys.save()
        .then(storedcategorys => {
          storedcategorys
            ? res.status(200).json({categorys: storedcategorys})
            : res.status(404).send({message: "Error al guardar el plato"})
        })
        .catch(error => res.status(500).send({message: "Error al guardar el plato"}))
    } else {
      return res.status(400).send({message: "Los datos no estan bien"})
    }
  },
//Actualizar
  updateCategory: function (req, res) {
    let categoryId = req.params.id
    let update = req.body

    categoryFood.findByIdAndUpdate(categoryId, update, {returnDocument: 'after'})
      .then(updatedCategory => {
        if(!updatedCategory) return res.status(404).send({message: "El plato no existe"})
        return res.status(200).send({category: updatedCategory})
      })
      .catch(error => res.status(500).send({message: `Error al actualizar${error}`}))
  },
  //Eliminar
  deleteCategory: function (req, res) {
    let foodId = req.params.id

    categoryFood.findByIdAndRemove(foodId)
      .then(removedCategory => {
        if (!removedCategory) return res.status(404).send({message: "El plato no existe."})
        return res.status(200).send({category: removedCategory})
      })
      .catch(err => res.status(500).send({message: "Error al eliminar"}))
  }
}

module.exports = controller