//creating the user model
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
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
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations defined here
        models.User.hasMany(models.Friends);
        models.Friends.belongsToMany(models.User);
        models.User.hasMany(models.Favorites);
        models.Favorites.belongsTo(models.User);
        models.User.hasMany(models.SeeSaw);
        models.SeeSaw.belongsTo(models.User);
        models.User.hasMany(models.Messages);
        models.Messages.belongsTo(models.User);
      }
    }
  });
  return User;
}