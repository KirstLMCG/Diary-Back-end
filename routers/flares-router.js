const flaresRouter = require('express').Router();
const { getFlares, getFlaresById, postFlare } = require('../controllers/flares')

//get all flares
flaresRouter
    .route("/")
    .get(getFlares, (req, res) => {
        res.send(getFlares)
    })
    
//get flares by id
flaresRouter
    .route("/:id")
    .get(getFlaresById, (req, res) => {
        res.send(req.params.id)
    })
    
//post flare -- currently not working due to httpie issue    
flaresRouter
    .route("/new")
    .post(postFlare, (req, res) => {
        res.send(req.body)
    })
    
      

module.exports = flaresRouter;