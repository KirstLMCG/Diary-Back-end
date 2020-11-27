const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//npm package to force unique key as mongoose doesn't provide this
const uniqueValidator = require('mongoose-unique-validator');

// schema to define key types for blog schema
const blogsSchema = new Schema({
    
    title: {
        
       type: Date,
       required: true,
       default: Date.now,
       unique: true
   
    },
    
    description: {
        
        type: String,
        required: true
    }
    
})

blogsSchema.plugin(uniqueValidator);

const Blog = mongoose.model('Blog', blogsSchema)

module.exports = Blog