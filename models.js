var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/users');

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

var twitSchema = mongoose.Schema({
  _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String
});

var Twit = mongoose.model('Twit', twitSchema);

module.exports.User = User;
module.exports.Twit = Twit;
