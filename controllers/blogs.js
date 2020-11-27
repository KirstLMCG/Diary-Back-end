const Blog = require('../models/blog.js')

exports.getBlogs = (req, res) => {

      Blog.find({}).sort({title: 'descending'}).then(blog => {
          res.status(200).send(blog)
          
      })
      .catch (err => {
          res.status(400).send(err.message)
          console.log(err.message)
      })
}

exports.getLatestBlog = (req, res) => {

      Blog.find().sort({ title: -1 }).limit(1).then(blog => {
          res.status(200).send(blog)
          
      })
      .catch (err => {
          res.status(400).send(err.message)
          console.log(err.message)
      })
}

exports.getBlogsById = (req, res) => {
    const { id } = req.params
    Blog.findById(id).then(blog => {
        res.status(200).send(blog)
   
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.postBlog = (req, res) => {
    const newBlog = new Blog();
    newBlog.description = req.body.description;
    
    newBlog.save().then(newBlog => {
        res.send(newBlog)
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteBlog = (req, res) => {
    const { id } = req.params
    
    Blog.findByIdAndRemove(id).exec().then(blog => {
       if (!blog) {
           return res.status(400).end() }
        return res.status(200).end()
    }).catch(err => {
        console.log(err)
    })
}
