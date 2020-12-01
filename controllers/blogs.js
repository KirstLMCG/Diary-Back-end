const Blog = require('../models/blog.js')
const Flare = require('../models/flare.js')
const Food = require('../models/food.js')

exports.getBlogs = (req, res) => {

      Blog.find({}).populate("flares").sort({title: 'descending'}).then(blog => {
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

exports.postBlog = (req, res) => {
    const newBlog = new Blog();
    newBlog.description = req.body.description;
    
    newBlog.save().then(newBlog => {
        res.send(newBlog)
    }).catch(err => {
        console.log(err)
    })
}

exports.postFlareToBlog = (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const newFlare = new Flare()
    newFlare.head = req.body.head
    newFlare.neck = req.body.neck
    newFlare.hands = req.body.hands
    newFlare.arms = req.body.arms
    newFlare.stomach = req.body.stomach
    newFlare.back = req.body.back
    newFlare.legs = req.body.legs
    newFlare.feet = req.body.feet
    newFlare.blog = id
    
    newFlare.save().then(newFlare => {
        res.status(200).send(newFlare)
    }).catch(err => {
        console.log(err)
    })
  
}

exports.getFlaresByBlogId = (req, res) => {
    const { id } = req.params
    Flare.find({blog: id}).limit(1).then(flare => {
        res.status(200).send(flare)
   
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.getFoodByBlogId = (req, res) => {
    const { id } = req.params
    Food.find({blog: id}).limit(1).then(food => {
        res.status(200).send(food)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.postFoodToBlog = (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const newFood = new Food()
    newFood.breakfast = req.body.breakfast
    newFood.lunch = req.body.lunch
    newFood.dinner = req.body.dinner
    newFood.snacks = req.body.snacks
    newFood.blog = id
    
    newFood.save().then(food => {
        res.status(200).send(food)
    }).catch(err => {
        console.log(err)
    })
  
}