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

exports.postFood = (req, res) => {
    const newFood = new Food();
    newFood.breakfast = req.body.breakfast;
    newFood.lunch = req.body.lunch;
    newFood.dinner = req.body.dinner;
    newFood.snacks = req.body.snacks;
    
    newFood.save().then(newFood => {
        res.send(newFood)
    }).catch(err => console.log(err))
    
    
}