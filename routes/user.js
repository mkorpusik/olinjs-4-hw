
/*
 * GET users listing.
 */
var models = require('../models');
var User = models.User;

exports.new = function(req, res){
    res.render('user', { title: 'User Login' });
};

exports.login = function(req, res){
  // check whether user exists already
  var user = new User({ name: req.body.name});
  console.log(user);
  user.save(function (err) {
    if (err)
      return console.log("error: couldn't save user");
    // redirect to new user page
    req.sessions.user = user;
    res.redirect('/users/:user');
  });
};

exports.user = function(req, res){
	var user = req.sessions.user;
	//var username = req.params.user;
    res.render('tweets', { user: user, title: 'Your Tweets' });
};