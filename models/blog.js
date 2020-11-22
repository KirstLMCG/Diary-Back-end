const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const blogsSchema = new Schema({
    
    title: {
        
       type: Date,
       required: true,
       default: Date.now,
       unique: true
   
    },
    
    description: {
        
        type: String,
        required: true,
        unique: true
    }
    
})

blogsSchema.plugin(uniqueValidator);

const Blog = mongoose.model('Blog', blogsSchema)

module.exports = Blog