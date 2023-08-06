// src/models/habitStatus.js
const mongoose = require('mongoose');

const habitStatusSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true,},
  time: {type: String, required: true,},
  habit: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit', required: true },
  date: { type: String, required: true },
  status: { type: String, default: 'None'},
}, {timestamps: true,});

const HabitStatus = mongoose.model('HabitStatus', habitStatusSchema);

module.exports = HabitStatus;
