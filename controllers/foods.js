const { selectFood } = require('../models/food')

exports.getFood = (req, res) => {

       res.status(200).send(selectFood())
}