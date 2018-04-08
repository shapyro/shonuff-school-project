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
  },{
    classMethods: {
      associate: function (models) {
        // associations defined here
        models.Venue.hasMany(models.Show);
        models.Show.belongsTo(models.Venue);
      }
    }
  });
  return Venue;
}