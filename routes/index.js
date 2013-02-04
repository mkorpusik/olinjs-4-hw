
/*
 * GET home page.
 */
var models = require('../models');
var User = models.User;
var Twit = models.Twit;

exports.index = function(req, res){
  var user = req.session.user;
  console.log("recent tweets, user is: " + user);
  var twits = []

  // display "compose a twit" if user is logged in
  if (user==undefined) {
    res.render('index', { twits: twits, title: 'Crappy Twitter' });
  } 
  else {
    //console.log(user.name);
    res.render('index2', { twits: twits, user: user, title: 'Crappy Twitter' });
  }
 
};

exports.list = function(req, res) {
  var twits = Twit.find({}, function(err, foundTwits) {
    res.render('_twits', {twits: foundTwits});
  });
};