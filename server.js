// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});



var friends = [

	{
		routeName: "yoda",
		name: "Yoda",
		photoPath: "Jedi Master",
		answer1: 900,
		answer2: 900,
		answer3: 900,
		answer4: 900,
		answer5: 900,
		answer6: 900,
		answer7: 900,
		answer8: 900,
		answer9: 900,
		answer10: 900,
			
	}
]



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'public/survey.html'));
});





// Search for Specific Character (or all friends) - provides JSON
app.get('/api/:friends?', function(req, res){

	var chosen = req.params.characters;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <friends.length; i++){

			if (chosen == friends[i].routeName){
				res.json(friends[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(friends);
	}
})