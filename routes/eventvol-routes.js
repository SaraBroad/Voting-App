var db = require("../models")

module.exports = function(app) {

//get 
app.get("/api/eventlisting", function(req, res){
    db.CampaignEvent.findAll({}).then(function(dbCampaignEvent){
        res.json(dbCampaignEvent)
    });
});


app.put("/api/postreg", function(req, res){
console.log(req.body);
db.EventVolunteer({
    id: req.body.id,
    time_slot: req.body.time_slot
}, {
    where: {
    //this is the event id
    id: req.body.id    
    }
}).then(function(dbEventVolunteer){
    res.json(dbEventVolunteer);
});
});
}




