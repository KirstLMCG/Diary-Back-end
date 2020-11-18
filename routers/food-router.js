const foodRouter = require('express').Router();
const { getFood } = require('../controllers/food-controller')

foodRouter.get("/", function(req, res) {
  res.send('Hello World!')
})
      

module.exports = foodRouter;