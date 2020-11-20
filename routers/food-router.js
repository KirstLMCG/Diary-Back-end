const foodRouter = require('express').Router();
const { getFood } = require('../controllers/foods')

foodRouter
    .route("/")
    .get(getFood, (req, res) => {
        res.send(getFood)
    })
      

module.exports = foodRouter;