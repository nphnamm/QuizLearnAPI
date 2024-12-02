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

       Set.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });

    }
  }
  Set.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    statusId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Statuses',
        key: 'id',
      },
      allowNull: false,
    },
    folderId: { // New field for associating a Set with a Folder
      type: DataTypes.INTEGER,
      references: {
        model: 'Folders', // Refers to the Folders table
        key: 'id',
      },
      allowNull: true // Allow null if a Set is not part of any Folder
    }
  }, {
    sequelize,
    modelName: 'Set',
    tableName: 'Sets' // Explicitly set the table name if it's different
  });
  return Set;
};