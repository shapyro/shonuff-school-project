//creating the Messages model
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    text: DataTypes.TEXT
  });

  Message.associate = function(models) {
    models.Message.belongsToMany(models.User, {through: 'Conversations', foreignKey: 'messenger_id'});
  };

  return Message;
}