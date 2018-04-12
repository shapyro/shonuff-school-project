//creating the Friends model
module.exports = (sequelize, DataTypes) => {
  var Friendship = sequelize.define('Friendship', {
    status: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  return Friendship;
}