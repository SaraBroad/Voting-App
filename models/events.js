// *****************************************************************************
// events.js - This file creates the campaign events table
//
// ******************************************************************************

module.exports = function(sequelize, DataTypes) {
    var CampaignEvent = sequelize.define("CampaignEvent", {
      // Giving the Author model a name of type STRING
      organization_name: DataTypes.STRING,
      organizer_first_name: DataTypes.STRING, 
      organizer_last_name: DataTypes.STRING,
      street_address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      time_slots: DataTypes.INTEGER
    });
  
    return CampaignEvent;
  };
  