const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  inputVariables: {
    type: [String],
    required: true
  },
  decision: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
