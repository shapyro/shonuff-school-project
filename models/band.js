//creating the Band model
module.exports = (sequelize, DataTypes) => {
  var Band = sequelize.define('Band', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
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
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Band.associate = function(models) {
    models.Band.hasMany(models.Show, {as: 'Shows', foreignKey: 'band_id'});
    models.Band.belongsToMany(models.User, {through: 'Favorites', foreignKey: 'band_id'});
  };

  return Band;
}