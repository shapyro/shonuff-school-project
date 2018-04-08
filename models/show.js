//creating the Shows model
module.exports = (sequelize, DataTypes) => {
  var Show = sequelize.define('Show', {
    name: {
      type: DataTypes.STRING,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Venues',
        key: 'id'
      }
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bands',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    showtime: DataTypes.TIME
  });
  return Show;
}