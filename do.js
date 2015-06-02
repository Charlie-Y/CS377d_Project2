var request = require('request');

var access_token = "621562041b62bf9fec2c547f1059962bc380b2502fba8a0c1b8bb92f9a210879";
// var access_token = "621562041b62bf9fec2c547f1059962bc380b2502fba8a0c1b8bb92f9a210879";
var root = "https://app.spire.io";

var date = new Date();
date.setHours(date.getHours() - 1);

console.log(date);
console.log(new Date());

var from_time = Math.floor(date.getTime()/1000);
var to_time = Math.floor(( new Date().getTime()) / 1000);

// var final_url = root + "/api/events/br?access_token=" + access_token + "&from=" + date.getTime();
var final_url = root + "/api/events/br?access_token=" + access_token + "&from=" + from_time + "&to=" + to_time;

console.log("Requesting: " + final_url);

var options = {
	path: final_url ,
	auth: access_token
}

request(final_url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	    // console.log(body); // Print the google web page.
	    
	    var data = JSON.parse(body);
	    var from = new Date(0);
	    from.setUTCSeconds(parseInt(data.metadata.from));
	    var to = new Date(0);
	    to.setUTCSeconds(parseInt(data.metadata.to));
	    
	    console.log(from);
	    console.log(to);
	    console.log(data.metadata.count);




	}	else {
		console.log("Failure: ");
		console.log(error)
		console.log(response);
	}
});	
