const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById, postBlog, getLatestBlog, deleteBlog } = require('../controllers/blogs')

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

//post blog
blogsRouter
    .route("/new")
    .post(postBlog, (req, res) => {
        res.send(req.body)
    })

//delete blog
blogsRouter
    .route("/:id")
    .delete(deleteBlog, (req, res) => {
        res.send(req.params)
    })
module.exports = blogsRouter;