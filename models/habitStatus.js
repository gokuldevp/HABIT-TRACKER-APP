// src/models/habitStatus.js
const mongoose = require('mongoose');

const habitStatusSchema = new mongoose.Schema({
  habit: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit', required: true },
  date: { type: String, required: true },
  status: { type: String, default: 'None'},
}, {timestamps: true,});

const HabitStatus = mongoose.model('HabitStatus', habitStatusSchema);

module.exports = HabitStatus;
