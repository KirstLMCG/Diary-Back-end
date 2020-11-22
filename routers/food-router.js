const foodRouter = require('express').Router();
const { getFoods, getFoodById } = require('../controllers/foods')

foodRouter
    .route("/")
    .get(getFoods, (req, res) => {
        res.send(getFoods)
    })
    
    foodRouter
    .route("/:id")
    .get(getFoodById, (req, res) => {
        res.send(req.params.id)
    })
      

module.exports = foodRouter;