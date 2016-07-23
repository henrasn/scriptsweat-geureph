var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('task', todoSchema, 'task');