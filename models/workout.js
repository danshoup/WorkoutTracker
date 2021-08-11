const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter a name for this workout...",
            },
            type: {
                type: String,
                trim: true,
                required: "Choose the type of exercise...",
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number, 
                required: "Enter the duration of the exercise...",
            },
            distance: {
                type: Number, 
            }
        }
    ],

    day: {
        type: Date,
        default: Date.now,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;