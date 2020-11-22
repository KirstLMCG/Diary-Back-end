const apiRouter = require('express').Router();
const foodRouter = require('./food-router');
const flaresRouter = require('./flares-router')
const blogsRouter = require('./blogs-router')

apiRouter.get("/foodtracking", foodRouter);
apiRouter.get("/flaretracking", flaresRouter)
apiRouter.get("/blog", blogsRouter)

module.exports = apiRouter;