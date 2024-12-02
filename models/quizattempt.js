'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizAttempt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
           // QuizAttempt thuộc về một User
           QuizAttempt.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      
           // QuizAttempt thuộc về một Quiz
           QuizAttempt.belongsTo(models.Quiz, { foreignKey: 'quizId', as: 'quiz' });
    }
  }
  QuizAttempt.init({
    quizId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizAttempt',
  });
  return QuizAttempt;
};