//creating the Friends model
module.exports = (sequelize, DataTypes) => {
  var Friends = sequelize.define('Friends', {
    uid1: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    uid2: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });
  return Friends;
}