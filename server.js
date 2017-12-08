//Express setup
var express = require('express'),
app= express(),
path = require('path')
//for getting 911 info
var request = require('request')
var returnedHTML = ''
//CORS setup
var cors = require('cors')

// var app = express()
app.use(cors())



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
// app.use('/images', express.static(path.join(__dirname, './images')));
app.use(express.static(path.join(__dirname, './node_modules')));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './EmergencyMap/dist')));




request('http://www2.seattle.gov/fire/realtime911/getRecsForDatePub.asp?action=Today&incDate=&rad1=des',
	function( error, response, body){
		console.log('error', error);
		returnedHTML=body;
	})
//check every minute for new data
setInterval(function(){
	request('http://www2.seattle.gov/fire/realtime911/getRecsForDatePub.asp?action=Today&incDate=&rad1=des',
	function( error, response, body){
		console.log('error', error);
		returnedHTML=body;
	})
},60000)
	
//serve NG app	
app.get('', function(req, res){
	res.sendFile(path + 'EmergencyMap/dist/index.html');
})


//serve 911 data 
app.get('/test', function(req, res){

	res.json({value: returnedHTML});

})






app.listen(8000, function(){
	console.log('Listening on port 8000');
})