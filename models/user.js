'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations
      User.hasMany(models.Set, { foreignKey: 'userId', as: 'sets' });
      User.hasMany(models.QuizAttempt, { foreignKey: 'userId', as: 'quizAttempts' });
      User.hasMany(models.LearningProgress, { foreignKey: 'userId', as: 'learningProgress' });

      // Associate with Statuses (assuming Status model exists)
      User.belongsTo(models.Status, { foreignKey: 'statusId', as: 'statuses' });
    }

    // Soft delete method: updates the user's status to "deleted"
    static async softDelete(userId) {
      const user = await User.findByPk(userId);
      if (user) {
        // Assuming the status ID for deleted users is 3 (for example)
        user.statusId = 3;  // "3" could represent a "deleted" status in your Status table
        await user.save();
      }
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true // Optional field
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true // Optional field
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    passwordHash: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusId: { // Adding the statusId column to reference the Status table
      type: DataTypes.INTEGER,
      allowNull: false, // User must have a valid status
      references: {
        model: 'Statuses', // Assuming you have a 'Statuses' table
        key: 'id'
      },
      onDelete: 'SET NULL', // If the referenced status is deleted, set the status to null
      defaultValue: 1 // Default value could be 1 (e.g., "active" status)
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
