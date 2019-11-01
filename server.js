// Load express Module
var express = require("express");
// Invoke express and store the result in the variable app
var app = express();
// Set static folder for html and css files.
app.use(express.static(__dirname + "/static"));
// Set location for ejs views
app.set('views', __dirname + '/views');
// Set ejs views engine
app.set('view engine', 'ejs');

// Use app's get method and pass it the base route '/' and a callback
// app.get('/', function(request, response) {
//     response.send(index.html);
// })


// Cats GET Route using ejs views
app.get("/cats", function(request, response){
    response.render('cats');
})

// Cars GET Route using ejs views
app.get("/cars", function(request, response){
    response.render('cars');
})

// New Car GET Route using ejs views
app.get("/cars/new", function(request, response){
    response.render('new');
})

// Tell express to listen on port 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})