<<<<<<< HEAD
// Defines the manager
=======
//manager to 
>>>>>>> 1c09bda8c7c7124b19af36f8840df1942fceca1d


module.exports = function(sequelize, DataTypes) {
    var Manager = sequelize.define("Manager", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,  
      organization_name: DataTypes.STRING,  
      city: DataTypes.STRING,       
    });
  
<<<<<<< HEAD
    Manager.associate = function(models){
      // associating the manager with the events created by them

      Manager.hasMany(models.CampaignEvents)
    }
=======
    /*Manager.associate = function(models){
      Manager.hasMany(models.CampaignEvents, {
        onDelete: "cascade"
      })
    }*/
>>>>>>> 1c09bda8c7c7124b19af36f8840df1942fceca1d
  
    return Manager;
  };
  