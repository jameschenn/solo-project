'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, {foreignKey: 'userId'});
    Booking.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Booking;
};
