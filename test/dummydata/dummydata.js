
// Requiring our models for syncing
var db = require("../../models");

module.exports = function() {

    db.Manager.create({
        first_name: "Joe",
        last_name: "The",
        email: "thejoe@yahooligans.com",  
        organization_name: "British Dental Association",  
        city: "Wilshire, Kentucky",  
        password: "hello"

    });
    //for now, manager MUST be created before a campaign event can be
    db.CampaignEvent.create({
        event_title: 'Food Drive',
        event_description: 'feeed me',
        organization_name: '2012 apocalypse fund',
        organizer_first_name: 'The', 
        organizer_last_name: 'Joe',
        street_address: '1234 Evergreen Terrace',
        city: 'Springfield',
        state: 'USA',
        zip_code: '12345',
        phone_number: '1235352222',
        time_slots: 2,
        
        //this is the foreign key that will be supplied by the middleware
        //for now I am just supplying it in the table directly
        //the table will not if ManagerID is Null due to line 26 of events.js
        ManagerId: 1
    });
    db.Volunteer.create({
        first_name: 'Isaac',
        last_name: 'Philadelphia',
        street_address: '1234 Evergreen Drive',
        city: 'New Hork',
        email: 'asdfasdf@gmail.com'
    });

    db.EventVolunteer.create({
        time_slot: 'afternoon',
        CampaignEventId: '1',
        VolunteerId: '1',

    });

};
