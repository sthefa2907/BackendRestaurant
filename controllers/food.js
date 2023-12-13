const Food = require('../models/food')

//Mostrar
const controller = {
  getFoods: function (req, res) {
    Food.find({}).exec()
      .then(foodList => {
        if (!foodList) return res.status(404).send({message: "Datos no encontrados"})
        return res.status(200).json(foodList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  //Detalle
  getFood: function (req, res) {
    let foodId = req.params.id
    if (foodId == null) return res.status(404).send({message: "show not found"})

    Food.findById(foodId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Show not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Error interno-> ${err}`}))
  },
  //Guardar
  saveFood: function (req, res) {
    let food = new Food()
    const {name, description, price} = req.body
    if (name && description) {
      food.name = name
      food.descrption = description
      food.price = price
      
      food.save()
        .then(storedFood => {
          storedFood
            ? res.status(200).json({food: storedFood})
            : res.status(404).send({message: "Error al guardar el plato"})
        })
        .catch(error => res.status(500).send({message: "Error al guardar el plato"}))
    } else {
      return res.status(400).send({message: "Los datos no estan bien"})
    }
  },
  //Actualizar
  updateFood: function (req, res) {
    let foodId = req.params.id
    let update = req.body

    Food.findByIdAndUpdate(foodId, update, {returnDocument: 'after'})
      .then(updatedFood => {
        if(!updatedFood) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({food: updatedFood})
      })
      .catch(error => res.status(500).send({message: `Error al actualizar${error}`}))
  },

  //Eliminar
  deleteFood: function (req, res) {
    let foodId = req.params.id

    Food.findByIdAndRemove(foodId)
      .then(removedFood => {
        if (!removedFood) return res.status(404).send({message: "El plato no existe."})
        return res.status(200).send({food: removedFood})
      })
      .catch(err => res.status(500).send({message: "Error al eliminar"}))
  }
}

module.exports = controller







































































































































































































