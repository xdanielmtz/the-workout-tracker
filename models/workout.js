const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            type: {
              type: String,
              trim: true,
              required: "Please enter the exercise type."
            },
            name: {
              type: String,
              trim: true,
              required: "Please enter the exercise name."
            },
            duration: {
              type: Number,
              required: false,
            },
            weight: {
              type: Number,
              required: false,
            },
            reps: {
              type: Number,
              required: false,
            },
            sets: {
              type: Number,
              required: false,
            },
            distance: {
              type: Number,
              required: false,
            },
          }
        ],
    
})
