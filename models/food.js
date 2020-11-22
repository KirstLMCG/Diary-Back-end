const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const foodsSchema = new Schema({
    
    breakfast: {
        type: String,
        required: true,
        unique: true
    },
    
    lunch: {
        type: String,
        required: true,
        unique: true
    },
    
    dinner: {
        type: String,
        required: true
    },
    
    snacks: {
        type: String,
        required: true,
        unique: true
    }
    
    
})

foodsSchema.plugin(uniqueValidator);

const Food = mongoose.model('Food', foodsSchema)
module.exports = Food

// exports.selectFood = () => {
//     console.log("In the model")
//     return "Hello";
// }

// const food = new Food();
//   food.breakfast = 'Coco Pops';
//   food.lunch = 'Scrambled Egg on Toast';
//   food.dinner = 'Roast Dinner';
//   food.snacks = 'Grapes, Melon, and Crisps';
// food.save();