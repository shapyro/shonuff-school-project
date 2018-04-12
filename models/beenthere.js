//creating the shows seen model (BeenThere)
module.exports = (sequelize, DataTypes) => {
  var BeenThere = sequelize.define('BeenThere', {
    attended: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  return BeenThere;
}