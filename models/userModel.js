var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  _id: String,
  name: String
});

module.exports = mongoose.model('userModel', userSchema);