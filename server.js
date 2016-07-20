// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;
var stream = process.stdout;
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
		photoPath: "http://static.srcdn.com/wp-content/uploads/Star-Wars-Alternate-Ending-Vader-Father-Yoda.jpg",
		answer1: 3,
		answer2: 5,
		answer3: 1,
		answer4: 3,
		answer5: 2,
		answer6: 5,
		answer7: 2,
		answer8: 1,
		answer9: 4,
		answer10: 2,
			
	}
]



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	stream.write("serving " + res); 
	console.log(app);
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/survey', function(req, res){
	//console.log(JSON.stringify(res, null, 2));
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