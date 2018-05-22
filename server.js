// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/eventvol-routes.js")(app);
require("./routes/volunteer-routes.js")(app);
require("./routes/manager-routes.js")(app);

// require("./routes/event-routes.js")(app);
// require("./routes/user-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});



//db.CampaignEvent.addVolunteer({first_name: 'Joe', last_name: 'The', email: 'thejoe@yoyoyoyoy.com'}, {through: {time_slot: 'afternoon'}});
//models.Volunteer.addCampaignEvent(models.CampaignEvent, { through: { time_slot: 'afternoon' }});