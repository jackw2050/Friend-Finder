
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'survey.html'));
});


