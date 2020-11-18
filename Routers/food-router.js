const foodRouter = require('express').Router();
const { getFood } = require('../Controllers/food-controller')

foodRouter.get("/", function(req, res) {
  res.send('Hello World!')
})
      

module.exports = foodRouter;