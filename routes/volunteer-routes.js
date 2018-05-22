<<<<<<< HEAD
=======
var db = require("../models");

module.exports = function (app) {
    app.get("/api/events/", function (req, res) {
        var query = {};
        db.CampaignEvent.findAll({
            where: query
        }).then(function (dbCampaignEvent) {
            res.json(dbCampaignEvent)
        });
    });

    app.post("/api/newuser", function (req, res) {
        db.Volunteer.create(req.body).then(function (dbVolunteer) {
            res.json(dbVolunteer)
        });
    });

    app.post("/api/eventreg", function (req, res){ 
        db.EventVolunteer.create(req.body).then(function(dbEventVolunteer){
            res.json(dbEventVolunteer)
        })
    })

    // // app.get("/api/volunteers", function(req, res){
    // //     db.Volunteer.findAll({
    // //     });
    // });
};



>>>>>>> 75da7f079fbcaa4f60e5ed94a8284c8d43142ff9
