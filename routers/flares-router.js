const flaresRouter = require('express').Router();
const { getFlares } = require('../controllers/flares-controller')

flaresRouter
    .route("/")
    .get(getFlares, (req, res) => {
        res.send(getFlares)
    })
      

module.exports = flaresRouter;