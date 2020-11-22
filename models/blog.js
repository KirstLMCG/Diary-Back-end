const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    
    title: {
        
        type: String,
        required: true
    },
    
    description: {
        
        type: String,
        required: true
    }
    
})

const Blog = mongoose.model('Blog', blogsSchema)

module.exports = Blog