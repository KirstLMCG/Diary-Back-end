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
