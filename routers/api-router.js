const apiRouter = require('express').Router();
const foodRouter = require('./food-router');

apiRouter.get("/foodtracking", foodRouter);

apiRouter.get("/api", function (req, res) {
  res.send('Hello World!')
})

module.exports = apiRouter;