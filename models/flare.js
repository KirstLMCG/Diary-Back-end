const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const flaresSchema = new Schema({
    
   head: {
      type: Number,
      required: true,
      unique: true
   },
   
   neck: {
       type: Number,
       required: true,
       unique: true
   },
   
   hands: {
       type: Number,
       required: true,
       unique: true
   },
   
   arms: {
       type: Number,
       required: true,
       unique: true
   },
   
   stomach: {
       type: Number,
       required: true,
       unique: true
   },
   
   back: {
       type: Number,
       required: true,
       unique: true
   },
   
   legs: {
       type: Number,
       required: true,
       unique: true
   },
   
   feet: {
       type: Number,
       required: true,
       unique: true
   },
   
   date: {
       type: Date,
       required: true,
       default: Date.now,
       unique: true
   },
   
   blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    }
})


flaresSchema.plugin(uniqueValidator);

const Flare = mongoose.model('Flare', flaresSchema)


// exports.selectFlares = () => {
//     console.log('***** Hi *******')
//     return Flare.find({}).toArray(function(result))
    // console.log(Flare);
//   Flare.find({})
//   .then(flares => {
//       console.log(flares)
//       return flares;
//   })
//   .catch((error) => {
//   console.log(error.message);
// })
// }

module.exports = Flare
