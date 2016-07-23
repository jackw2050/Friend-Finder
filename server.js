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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('public'));

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {

    console.log('App listening on PORT ' + PORT);
});

var friends = [

    {
        routeName: "yoda",
        name: "Yoda",
        photoPath: "http://static.srcdn.com/wp-content/uploads/Star-Wars-Alternate-Ending-Vader-Father-Yoda.jpg",
        answers: [1, 5, 1, 4, 4, 3, 2, 1, 3, 4]
    },
    {
        routeName: "Chubaka",
        name: "Chubaka",
        photoPath: "http://static.srcdn.com/wp-content/uploads/Star-Wars-Alternate-Ending-Vader-Father-Yoda.jpg",
        answers: [5, 5, 5, 1, 1, 5, 5, 5, 3, 4]
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
//    stream.write("serving " + res);
    //	console.log(app);
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/survey', function(req, res) {
    //console.log(JSON.stringify(res, null, 2));
    res.sendFile(path.join(__dirname, 'public/survey.html'));
});



// Create New Characters - takes in JSON input
app.post('/api/friends', function(req, res) {

    var userInput = req.body;
    //newcharacter = newcharacter.name.replace(/\s+/g, '').toLowerCase()
    //console.log(userInput);

    //console.log("user " + userInput.answers[1]);
    // need to change answers to an array

    //friends.push(newcharacter.name);



    var friendSelector = [100,0];
    //console.log(friendSelector);

    for (var i = 0; i < friends.length; i++) {
        var errorCheck = [0,0,0,0,0,0,0,0,0,0];
        var usr1 = 0;
        var frd1 = 0;
        var errorSumm = 0


        for (ansCount = 0; ansCount < 10; ansCount++) {

        	usr1 =   parseFloat(userInput.answers[ansCount]);
        	frd1 = friends[i].answers[ansCount];

            errorCheck[ansCount] = Math.abs(userInput.answers[ansCount] - friends[i].answers[ansCount])/userInput.answers[ansCount] ;
               errorSumm += errorCheck[ansCount] ;
               }

        errorSumm = errorSumm / 10;
        if (errorSumm < friendSelector[0]){
            friendSelector[0] = errorSumm;
            friendSelector[1] = i;
        }



        //console.log(friends[i].name + "   " +  errorSumm);
    }

    var testA = friendSelector[1];
    var testB = friends[0];
    console.log(friends[0]);






    res.json(friends[1]);
    //res.json(friends[friendSelector[1]]);
})





// Search for Specific Character (or all friends) - provides JSON
app.get('/api/:newfriends?', function(req, res) {
    var chosen = req.params.characters;
    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < friends.length; i++) {
            if (chosen == friends[i].routeName) {
                res.json(friends[i]);
                return;
            }
        }
        res.json(false);
    } else {
        res.json(friends[1]);
    }
})
