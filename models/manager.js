module.exports = function(sequelize, DataTypes) {
    var Manager = sequelize.define("Manager", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,  

      
    });
  

  
    return Manager;
  };
  