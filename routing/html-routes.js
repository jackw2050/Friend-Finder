
// Create New Characters - takes in JSON input
app.post('/api/clear', function(req, res){

	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase();
	//console.log(newcharacter);
	characters.push(newcharacter);
	res.json(newcharacter);
});

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){
	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase();
	//console.log(newcharacter);
	characters.push(newcharacter);
	res.json(newcharacter);
});