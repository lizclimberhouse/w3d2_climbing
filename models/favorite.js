'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    grade: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};