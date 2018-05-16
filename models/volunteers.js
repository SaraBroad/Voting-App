// *****************************************************************************
// volunteers.js - This file creates the table for each volunteer and their data
//
// ******************************************************************************


module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,  

    });
    
  
    return Volunteer;
  };
  