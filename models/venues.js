//creating the Venues model
module.exports = (sequelize, DataTypes) => {
  var Venue = sequelize.define('Venue', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    street: {
      type: DataTypes.STRING
    }
  });

  Venue.associate = function(models) {
    models.Venue.hasMany(models.Show, {as: 'Shows', foreignKey: 'venue_id'});
  };

  return Venue;
}