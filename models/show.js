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
    showtime: DataTypes.TIME,
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Show.associate = function(models) {
    models.Show.belongsTo(models.Band, {as: 'Bands', foreignKey: 'band_id'});
    models.Show.belongsTo(models.Venue, {as: 'Venues', foreignKey: 'band_id'});
    models.Show.belongsToMany(models.User, {through: 'Likes', foreignKey: 'show_id'});
  };

  return Show;
}