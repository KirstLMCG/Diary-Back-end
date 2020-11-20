const apiRouter = require('express').Router();
const foodRouter = require('./food-router');
const flaresRouter = require('./flares-router')

apiRouter.get("/foodtracking", foodRouter);
apiRouter.get("/flaretracking", flaresRouter)


module.exports = apiRouter;