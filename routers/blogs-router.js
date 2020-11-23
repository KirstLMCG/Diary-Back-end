const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById } = require('../controllers/blogs')

//get all blogs
blogsRouter
    .route("/")
    .get(getBlogs, (req, res) => {
        res.send(getBlogs)
    })
    
//get blog by id
blogsRouter
    .route("/:id")
    .get(getBlogsById, (req, res) => {
        res.send(req.params)
    })

//post food

module.exports = blogsRouter;