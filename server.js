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
//require("./routes/html-routes.js")(app);
//require("./routes/event-routes.js")(app);
//require("./routes/user-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
        //TEST CODE: DELETE ME//
        db.CampaignEvent.create({
            name: 'Food Drive',
            location: 'Philadelphia',
        });
        db.Volunteer.create({
            first_name: 'Isaac',
            last_name: 'Philadelphia',
            email: 'asdfasdf@gmail.com'
        });
        /*db.EventVolunteer.create({
            time_slot: 'afternoon',
            CampaignEventId: '1',
            VolunteerId: '1',

        });*/
        //TEST CODE: DELETE ME//
        db.CampaignEvent.addVolunteer({first_name: 'Joe', last_name: 'The', email: 'thejoe@yoyoyoyoy.com'}, {through: {time_slot: 'afternoon'}});
    });
});




//models.Volunteer.addCampaignEvent(models.CampaignEvent, { through: { time_slot: 'afternoon' }});
