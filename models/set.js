'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // Set thuộc về một User
       Set.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      
       // Set có nhiều Card
       Set.hasMany(models.Card, { foreignKey: 'setId', as: 'cards' });
       
       // Set có nhiều Quiz
       Set.hasMany(models.Quiz, { foreignKey: 'setId', as: 'quizzes' });
       
       // Set có nhiều LearningProgress
       Set.hasMany(models.LearningProgress, { foreignKey: 'setId', as: 'learningProgress' });
    }
  }
  Set.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};