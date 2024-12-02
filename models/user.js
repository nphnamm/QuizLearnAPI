'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations
      User.hasMany(models.Set, { foreignKey: 'userId', as: 'sets' });
      User.hasMany(models.QuizAttempt, { foreignKey: 'userId', as: 'quizAttempts' });
      User.hasMany(models.LearningProgress, { foreignKey: 'userId', as: 'learningProgress' });
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
      allowNull: true // Cho phép null nếu không cần bắt buộc
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true // Cho phép null nếu không cần bắt buộc
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
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
