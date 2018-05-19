// Defines the manager


module.exports = function(sequelize, DataTypes) {
    var Manager = sequelize.define("Manager", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,  
      organization_name: DataTypes.STRING,  
      city: DataTypes.STRING,       
    });
  
    /*Manager.associate = function(models){
      Manager.hasMany(models.CampaignEvents, {
        onDelete: "cascade"
      })
    }*/
  
    return Manager;
  };
  