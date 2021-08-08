const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
        required: "Enter weight...",
    },
    sets: {
        type: Number,
        required: "Enter sets...",
    },
    reps: {
        type: Number,
        required: "Enter number of reps...",
    },
    duration: {
        type: Number, 
        required: "Enter the duration of the exercise...",
    },
    distance: {
        type: Number, 
        required: "Enter distance...",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;