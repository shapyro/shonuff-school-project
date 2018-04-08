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
    }
  },{
    classMethods: {
      associate: function (models) {
        // associations defined here
        models.Band.hasMany(models.Show)
        models.Show.belongsTo(models.Band)
      }
    }
  });
  return Band;
}