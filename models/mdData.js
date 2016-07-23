var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('Data', dataSchema, 'data');