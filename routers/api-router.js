const apiRouter = require('express').Router();
const foodRouter = require('./food-router');
const flaresRouter = require('./flares-router')

apiRouter.get("/foodtracking", foodRouter);
apiRouter.get("/flaretracking", flaresRouter)

// apiRouter.get("/api", function (req, res) {
//   res.send('Hello World!')
// })

module.exports = apiRouter;