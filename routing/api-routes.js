
module.exports = function( request, response, next){

var stream = process.stdout;
var url = request.url;
var method = request.method;
var message = method + ' to ' + url ;
stream.write(message); 

next();



}
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(request, response){
	response.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/survey', function(request, response){
	response.sendFile(path.join(__dirname, 'survey.html'));
});








var characters = [

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
app.get('/', function(request, response){
	response.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/survey', function(request, response){
	response.sendFile(path.join(__dirname, 'public/survey.html'));
});

app.get('/c2', function(request, response){
    response.sendFile(path.join(__dirname, 'index2.html'));
});
