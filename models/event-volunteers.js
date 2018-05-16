// *****************************************************************************
// event-volunteers.js - This file creates the join table for the many to many relationship between volunteer and events.  
// ******************************************************************************


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

Volunteer.addCampaignEvent(CampaignEvent, { through: { time_slot: 'afternoon' }});