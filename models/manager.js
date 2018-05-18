// Defines the manager


module.exports = function(sequelize, DataTypes) {
    var Manager = sequelize.define("Manager", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,  
      organization_name: DataTypes.STRING,  
      city: DataTypes.STRING,       
    });
  
    Manager.associate = function(models){
      // associating the manager with the events created by them

      Manager.hasMany(models.CampaignEvents)
    }
  
    return Manager;
  };
  