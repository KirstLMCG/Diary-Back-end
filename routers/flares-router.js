const flaresRouter = require('express').Router();
const { getFlares, getFlaresById, getFlaresByBlogId, postFlare } = require('../controllers/flares')

//get all flares
flaresRouter
    .route("/")
    .get(getFlares, (req, res) => {
        res.send(getFlares)
    })
    
//get flares by id
// flaresRouter
//     .route("/:blogId")
//     .get(getFlaresByBlogId, (req, res) => {
//         res.send(getFlaresByBlogId)
//     })
    
//post flare  
flaresRouter
    .route("/new")
    .post(postFlare, (req, res) => {
        res.send(req.body)
    })
    
      

module.exports = flaresRouter;