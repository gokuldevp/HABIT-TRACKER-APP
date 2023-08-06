const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({    
    name: {type: String, required: true, unique: true,},
    time: {type: String, required: true,},
}, {timestamps: true,});


const Habit = mongoose.model('Habit',habitSchema);    

module.exports = Habit;