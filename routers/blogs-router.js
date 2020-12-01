const blogsRouter = require('express').Router()
const { getBlogs, getBlogsById, postBlog, getLatestBlog, deleteBlog, postFlareToBlog, getFlaresByBlogId, getFoodByBlogId, postFoodToBlog } = require('../controllers/blogs')

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
module.exports = blogsRouter

//Post Flare to Blog
blogsRouter
  .route('/:id/flaretracking')
  .post(postFlareToBlog, (req, res) => {
      res.send(postFlareToBlog)
  })
  
blogsRouter
    .route("/:id/flares")
    .get(getFlaresByBlogId, (req, res) => {
        res.send(req.params.id)
    })
    
 blogsRouter
    .route("/:id/food")
    .get(getFoodByBlogId, (req, res) => {
        res.send(req.params.id)
    })
    
 blogsRouter
   .route('/:id/foodtracking')
   .post(postFoodToBlog, (req, res) => {
       res.send(postFoodToBlog)
   })
    
  


