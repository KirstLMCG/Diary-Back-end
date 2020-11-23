const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById, postBlog } = require('../controllers/blogs')

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
blogsRouter
    .route("/new")
    .post(postBlog, (req, res) => {
        res.send(req.body)
    })

module.exports = blogsRouter;