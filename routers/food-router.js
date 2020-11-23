const foodRouter = require('express').Router();
const { getFoods, getFoodById, postFood } = require('../controllers/foods')

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
    foodRouter
    .route('/new')
    .post(postFood, (req, res) => {
        res.send(req.body)
    })

module.exports = foodRouter;