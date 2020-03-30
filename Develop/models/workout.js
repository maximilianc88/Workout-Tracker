const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true
        },
        name: {
          type: String,
          trim: true
        },
        duration: {
          type: Number,
          match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
        },
        weight: {
          type: Number,
          match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
        },
        reps: {
          type: Number,
          match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
        },
        sets: {
          type: Number,
          match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
        },
        distance: {
          type: Number,
          match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
        }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = mongoose.model("Workout", workoutSchema);