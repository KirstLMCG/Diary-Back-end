const foodRouter = require('express').Router();
const { getFoods, getFoodById } = require('../controllers/foods')

//get all food
foodRouter
    .route("/")
    .get(getFoods, (req, res) => {
        res.send(getFoods)
    })
    
//get food by id    
    foodRouter
    .route("/:id")
    .get(getFoodById, (req, res) => {
        res.send(req.params.id)
    })
      
//post food

module.exports = foodRouter;