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
              required: "Please enter a number",
            },
            reps: {
              type: Number,
              required: "Please enter a number",
            },
            sets: {
              type: Number,
              required: "Please enter a number",
            },
            distance: {
              type: Number,
              required: "Please enter a number",
            },
          },
          {
            toJSON: {
              virtual: true
            }
          }
        ]
})

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = mongoose.model(`Workout`, workoutSchema);
