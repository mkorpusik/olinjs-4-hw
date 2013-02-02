
/*
 * GET home page.
 */

exports.index = function(req, res){
  var getTweets = function(){
  	var newTweets = ["this is a tweet", "another tweet"];
    console.log(newTweets);
    res.render('index', { tweets: newTweets, title: 'Recent Tweets' });
   };
  setInterval(getTweets, 2000);
};