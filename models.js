var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;
