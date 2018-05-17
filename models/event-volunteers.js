// *****************************************************************************
// event-volunteers.js - This file creates the join table for the many to many relationship between volunteer and events.  
// ******************************************************************************
//POST request will grab volunteer ID and Event ID and put them into the table as rows
//EXAMPLES: 

        //TEST CODE: DELETE ME//
        /*db.CampaignEvent.create({
            name: 'Food Drive',
            location: 'Philadelphia',
        });
        db.Volunteer.create({
            first_name: 'Isaac',
            last_name: 'Philadelphia',
            email: 'asdfasdf@gmail.com'
        });
        db.EventVolunteer.create({
            time_slot: 'afternoon',
            CampaignEventId: '1',
            VolunteerId: '1',

        });*/
        //TEST CODE: DELETE ME//

//

module.exports = function(sequelize, DataTypes){
  var EventVolunteer = sequelize.define("EventVolunteer", {
    time_slot: DataTypes.STRING(45),
  });
  EventVolunteer.associate = function (models){
    models.CampaignEvent.belongsToMany(models.Volunteer, { through: EventVolunteer});
    models.Volunteer.belongsToMany(models.CampaignEvent, {through: EventVolunteer});
    }
    return EventVolunteer;

}

