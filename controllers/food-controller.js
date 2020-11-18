const { selectFood } = require('../models/food-model')

exports.getFood = (req, res) => {

       res.status(200).send(selectFood())
}