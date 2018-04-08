//creating the shows seen model (SeeSaws)
module.exports = (sequelize, DataTypes) => {
  var SeeSaw = sequelize.define('SeeSaw', {
    uid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    show: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Shows',
        key: 'id'
      }
    }
  });
  return SeeSaw;
}