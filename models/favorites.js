//creating the Favorites model
module.exports = (sequelize, DataTypes) => {
  var Favorites = sequelize.define('Favorites', {
    uid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    bandId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bands',
        key: 'id'
      }
    }
  });
  return Favorites;
}