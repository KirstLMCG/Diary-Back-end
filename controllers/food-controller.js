const { selectFood } = require('../models/food-model')

console.log("TEST, controller")

exports.getFood = (req, res) => {
    selectFood()
    .then(function(food) {
        console.log("I'm in the controller")
    })
}