//creating the shows seen model (BeenThere)
module.exports = (sequelize, DataTypes) => {
  var Likes = sequelize.define('Likes', {
    like: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  return Likes;
}