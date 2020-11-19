const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flaresSchema = new Schema({
    
   head: {
      type: Number,
      required: true
   },
   
   neck: {
       type: Number,
       required: true
   },
   
   hands: {
       type: Number,
       required: true
   },
   
   arms: {
       type: Number,
       required: true
   },
   
   stomach: {
       type: Number,
       required: true
   },
   
   back: {
       type: Number,
       required: true
   },
   
   legs: {
       type: Number,
       required: true
   },
   
   feet: {
       type: Number,
       required: true
   },
   
   date: {
       type: Date,
       required: true,
       default: Date.now
   }
   
})

module.exports = mongoose.model('Flare', flaresSchema)