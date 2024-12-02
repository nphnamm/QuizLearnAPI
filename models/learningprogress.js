'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // LearningProgress thuộc về một User
      LearningProgress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      
      // LearningProgress thuộc về một Set
      LearningProgress.belongsTo(models.Set, { foreignKey: 'setId', as: 'set' });
      
      // LearningProgress thuộc về một Question
      LearningProgress.belongsTo(models.Question, { foreignKey: 'questionId', as: 'question' });
      
      // LearningProgress thuộc về một Option (đáp án đã chọn)
      LearningProgress.belongsTo(models.Option, { foreignKey: 'selectedOptionId', as: 'selectedOption' });
    }
  }
  LearningProgress.init({
    userId: DataTypes.INTEGER,
    setId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    selectedOptionId: DataTypes.INTEGER,
    isCorrect: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LearningProgress',
  });
  return LearningProgress;
};