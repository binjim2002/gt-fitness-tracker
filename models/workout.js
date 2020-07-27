const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Requires a type to be set"
        },
        name: {
            type: String,
            required: "Excercise needs a name"
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
        
    }]
});

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;