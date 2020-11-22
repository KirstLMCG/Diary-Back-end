const blogsRouter = require('express').Router()
const { getBlogs } = require('../controllers/blogs')

blogsRouter
    .route("/")
    .get(getBlogs, (req, res) => {
        res.send(getBlogs)
    })
    

module.exports = blogsRouter;