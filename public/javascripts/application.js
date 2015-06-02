

function output (str) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(str.toString()); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  // var body =  document.querySelector("body");
  document.body.appendChild(newDiv); 
}

output('Application.js');
output('Starting up');

// "0bf4ccd80a0c0d95024e34937e53924007153fb358e8a7d0a111c79c46f7ac4c"

var wssurl = "wss://istor.spire.io/api/v1/b6144740d5ccdb602a9137f559014da9881aa3a57d9b0417acdd21c88f443e99";
var access_token = "621562041b62bf9fec2c547f1059962bc380b2502fba8a0c1b8bb92f9a210879";
var root = "https://app.spire.io"

function reqListener () {
  console.log(this.responseText);
}

var httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = reqListener;
httpRequest.onload = reqListener;

httpRequest.open("GET", root + "/api/events/br?access_token=" + access_token, true);
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// httpRequest.setHeader("Access-Control-Allow-Origin", "*");

httpRequest.send();











(function() {

	// var exampleSocket = new WebSocket(wssurl);

	// exampleSocket.onmessage = function(event){
	// 	console.log(event);
	// 	console.log(event.data);
	// }

	// var host = wssurl;
	// var socket = new ReconnectingWebSocket(host);

	// socket.onopen = function(){
	// 	var sub = {
	// 		"access_token": access_token,
	// 		"action": "subscribe",                     
	// 		"event":["event.*"]
	// 	};
	// 	socket.send(JSON.stringify(sub));
	// }

	// socket.onmessage = function(msg){
	// 	var d = JSON.parse(msg.data);
	// 	if(d.action == "event"){
	// 		console.log(d);
	// 	}
	// }
	// socket.onclose = function(){}

})();
