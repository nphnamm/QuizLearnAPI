'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Set, {
        foreignKey: 'setId',
        as: 'set',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Card.belongsTo(models.Status, {
        foreignKey: 'statusId',
        as: 'status',
        onDelete: 'SET NULL', // Or cascade, depending on your needs
        onUpdate: 'CASCADE',
      });
    }
  }

  Card.init({
    setId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sets',
        key: 'id',
      },
      index: true, // Index for performance
    },
    term: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    statusId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Statuses',
        key: 'id',
      },
      allowNull: false,
      defaultValue: 1, // Default status ID (if any)
      index: true, // Index for performance
    },
  }, {
    sequelize,
    modelName: 'Card',
    timestamps: true, // Use timestamps for createdAt/updatedAt tracking
    paranoid: true,  // Enable soft deletes if needed
  });

  return Card;
};
