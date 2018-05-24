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
        db.EventVolunteer.create({
            VolunteerId: req.body.VolunteerId,
            CampaignId: req.body.CampaignEventId
        }).then(function(dbEventVolunteer){
            res.json(dbEventVolunteer)
        });
    });
   
    app.get("/api/postreg/:email", function(req, res){
        console.log(req.body);
        db.Volunteer.findOne({
            where: {
                email: req.params.email
            }
        }).then(function(dbVolunteer){
            res.json(dbVolunteer.toJSON());
    })

        // const client = require('twilio')(accountSid, authToken);
        // const accountSid = 'AC99ccd7368d5e2e45dc69eeabaf2374cd'
        // const authToken = '6f2d5b8eff96067cbf5ab73a9332e1cb'
        // }
});
};



