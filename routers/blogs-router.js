const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById } = require('../controllers/blogs')

blogsRouter
    .route("/")
    .get(getBlogs, (req, res) => {
        res.send(getBlogs)
    })
    
blogsRouter
    .route("/:id")
    .get(getBlogsById, (req, res) => {
        res.send(req.params)
    })

module.exports = blogsRouter;