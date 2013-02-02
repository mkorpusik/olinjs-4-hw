
/*
 * GET users listing.
 */
var models = require('../models');
var User = models.User;

exports.new = function(req, res){
    res.render('user', { title: 'User Login' });
};

exports.login = function(req, res){
  var user = new User({ name: req.body.name});
};