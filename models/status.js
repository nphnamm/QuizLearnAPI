'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      // Define any associations if necessary
      Status.hasMany(models.Set, { foreignKey: 'statusId', as: 'sets' });
      Status.hasMany(models.User, { foreignKey: 'statusId', as: 'users' });
    }
  }

  Status.init({
    status_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Status',
  });

  return Status;
};
