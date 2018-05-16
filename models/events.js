// *****************************************************************************
// events.js - This file creates the campaign events table
//
// ******************************************************************************

module.exports = function(sequelize, DataTypes) {
    var CampaignEvent = sequelize.define("CampaignEvent", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      location: DataTypes.STRING, 
    });

    CampaignEvent.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      CampaignEvent.hasMany(models.Volunteer);
    };
  
  

  
    return CampaignEvent;
  };
  