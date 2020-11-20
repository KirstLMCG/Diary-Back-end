const flaresRouter = require('express').Router();
const { getFlares, getFlaresById } = require('../controllers/flares')

flaresRouter
    .route("/")
    .get(getFlares, (req, res) => {
        res.send(getFlares)
    })
    
flaresRouter
    .route("/:id")
    .get(getFlaresById, (req, res) => {
        res.send(req.params.id)
    })
    
      

module.exports = flaresRouter;