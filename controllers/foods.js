const Food = require('../models/food')

exports.getFoods = (req, res) => {
     
     Food.find({}).then(foods => {
          res.status(200).send(foods)

      })
      .catch (err => {
          res.status(400).send(err.message)
          console.log(err.message)
      })
}

exports.getFoodById = (req, res) => {
    const { id } = req.params
    Food.findById(id).then(foodid => {
        res.status(200).send(foodid)
   
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}