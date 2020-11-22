const Blog = require('../models/blog.js')

exports.getBlogs = (req, res) => {

      Blog.find({}).then(blog => {
          res.status(200).send(blog)
          
      })
      .catch (err => {
          res.status(400).send(err.message)
          console.log(err.message)
      })
}

exports.getBlogsById = (req, res) => {
    const { id } = req.params
    Blog.findById(id).then(blogid => {
        res.status(200).send(blogid)
   
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

