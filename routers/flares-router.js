const flaresRouter = require('express').Router();
const { getFlares, getFlaresById, postFlare } = require('../controllers/flares')

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
    
flaresRouter
    .route("/")
    .post(postFlare, (req, res) => {
        res.send(req.body)
    })
    
      

module.exports = flaresRouter;