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

        })
    })

    // // app.get("/api/volunteers", function(req, res){
    // //     db.Volunteer.findAll({
    // //     });
    // });
};



