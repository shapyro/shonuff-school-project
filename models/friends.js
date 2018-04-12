//creating the Friends model
module.exports = (sequelize, DataTypes) => {
  var Friends = sequelize.define('Friends', {
  });
  
  Friends.associate = function(models) {
    models.Friends.belongsToMany(models.User, {through: 'Friendship', foreignKey: 'friend_id'});
  };

  return Friends;
}