//creating the Messages model
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    fromUID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    toUID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    text: DataTypes.STRING
  });
  return Message;
}