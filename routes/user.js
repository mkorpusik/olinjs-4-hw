
/*
 * GET users listing.
 */
var models = require('../models');
var User = models.User;
var Twit = models.Twit;

exports.new = function(req, res){
    res.render('user', { title: 'User Login' });
};

exports.login = function(req, res){
  
  var exists =  User.find({"name":req.body.name}, function (err, docs) {
    console.log(docs.length);

    // user does not exist already
    if (docs.length==0) {
      var user = new User({ name: req.body.name});
      console.log(user);
      user.save(function (err) {
    
      if (err)
        return console.log("error: couldn't save user");
    
      // redirect to new user page
      req.session.user = user;
      res.redirect('/');
      });
    }
    
    // login with sessions if user exists
    else if (docs.length>0){
      var user = docs;
      console.log(user);
      req.session.user = user;
      res.redirect('/');
    }

    if (err)
      return console.log("error", exists);
  });

};

exports.user = function(req, res){
  var twit = req.body.twit;
	var user = req.session.user[0];
  console.log(user);
  console.log(twit);
  console.log(user._id);
  
  if (twit.length<140) {
    // create new twit with username and message
    var twit = new Twit({ _creator: user._id, message: twit});
    twit.save(function (err) {
      if (err)
        return console.log("error: couldn't save twit");
    });
    return true;

  } else
    return false;
};