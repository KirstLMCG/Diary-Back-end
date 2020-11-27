const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById, postBlog, getLatestBlog } = require('../controllers/blogs')

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
    
// Get latest blog
blogsRouter
    .route("/latest")
    .get(getLatestBlog, (req, res) => {
        res.send(getLatestBlog)
    })

//post food
blogsRouter
    .route("/new")
    .post(postBlog, (req, res) => {
        res.send(req.body)
    })

module.exports = blogsRouter;