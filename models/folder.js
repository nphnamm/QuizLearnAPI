'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A Folder has many Sets
      Folder.hasMany(models.Set, { foreignKey: 'folderId', as: 'sets' });

      // Folder belongs to a User
      Folder.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

      // Folder belongs to a Status
      Folder.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
    }
  }

  Folder.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Folder name is required
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional description
    },
    statusId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Statuses',
        key: 'id',
      },
      allowNull: false, // Folder must have a status
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Folder',
    tableName: 'Folders', 
    timestamps: true, 
  });

  return Folder;
};
