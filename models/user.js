//creating the user model
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [2]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    picture: DataTypes.STRING
  });

  return User;
}