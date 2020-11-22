const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodsSchema = new Schema({
    
    breakfast: {
        type: String,
        required: true
    },
    
    lunch: {
        type: String,
        required: true
    },
    
    dinner: {
        type: String,
        required: true
    },
    
    snacks: {
        type: String,
        required: true
    }
    
    
})

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