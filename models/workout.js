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
              required: "Please enter duration of exercise.",
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
        ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
