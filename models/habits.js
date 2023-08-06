const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({    // Creating a new Schema
    name: {
        type: String,       // set the type as string
        required: true,     // make the attribute as manditory
        unique: true,       // make the attribute unique(no dublicates are allowed)
    },
    time: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,        //automatically create create at and updated at fields
});


const Habit = mongoose.model('Habit',habitSchema);     // Create a new model using the user schema

module.exports = Habit;