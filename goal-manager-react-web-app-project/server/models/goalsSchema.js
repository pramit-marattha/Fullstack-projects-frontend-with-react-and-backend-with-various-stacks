const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for goals
const GoalSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The text field is empty']
  }
})

//create model for Goal Manager
const Goal = mongoose.model('goals', GoalSchema);

module.exports = Goal;