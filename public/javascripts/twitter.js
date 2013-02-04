$(document).ready(function (){
  // test that the jade files are linked to jQuery
  console.log('test');

  // use on submit and serialize for forms
  $('#newTwit').on('submit', function () {
    console.log('user posted a twit');
    var success = $.post("/tweets/:user", $('#newTwit').serialize());
    
    // display error if twit's length > 140 characters
    if (!success)
    	alert("Error: Please limit your twit to 140 characters.");
    return false;
  });

  // render list of twits every 2 secs
  var getTweets = function(){
    $.get("/tweets/list");
    //alert("checking for new twits");
   };
  setInterval(getTweets, 2000);
  

});