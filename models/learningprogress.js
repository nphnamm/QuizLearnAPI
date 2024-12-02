'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LearningProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // LearningProgress belongs to a User
      LearningProgress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

      // LearningProgress belongs to a Set
      LearningProgress.belongsTo(models.Set, { foreignKey: 'setId', as: 'set' });

      // LearningProgress belongs to a Card
      LearningProgress.belongsTo(models.Card, { foreignKey: 'cardId', as: 'card' });

      // LearningProgress belongs to a Question (if the cards are question-based)
      LearningProgress.belongsTo(models.Question, { foreignKey: 'questionId', as: 'question' });

      // LearningProgress belongs to an Option (selected answer)
      LearningProgress.belongsTo(models.Option, { foreignKey: 'selectedOptionId', as: 'selectedOption' });
    }
  }

  LearningProgress.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      index: true, // Index foreign key for better performance
    },
    setId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sets',
        key: 'id',
      },
      index: true, // Index foreign key for better performance
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false, // cardId is required to link to a card
      references: {
        model: 'Cards',
        key: 'id',
      },
      index: true, // Index foreign key for better performance
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Not required if cards are not based on questions
      references: {
        model: 'Questions',
        key: 'id',
      },
      index: true, // Index foreign key for better performance
    },
    selectedOptionId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Not required if the card is not multiple choice
      references: {
        model: 'Options',
        key: 'id',
      },
      index: true, // Index foreign key for better performance
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // Ensure this field is always present
      defaultValue: false, // Default value to false when no value is provided
    },
    progressDate: {
      type: DataTypes.DATE,
      allowNull: true, // Optional field to track the date of the progress
      defaultValue: DataTypes.NOW, // Default to current date/time
    },
  }, {
    sequelize,
    modelName: 'LearningProgress',
    tableName: 'LearningProgresses', // Explicitly set the table name if needed
    timestamps: true, // Enable createdAt and updatedAt for record tracking
  });

  return LearningProgress;
};
