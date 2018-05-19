var express = require("express");
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require("body-parser");
var path = require("path");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();
app.use(express.static("public"));

app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

require("./routes/html-routes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});