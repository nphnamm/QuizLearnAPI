'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LearningProgresses', [
      {
        userId: 1,
        setId: 1,
        questionId: 1,
        selectedOptionId: 1,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        setId: 1,
        questionId: 2,
        selectedOptionId: 3,
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LearningProgressé', null, {});
  }
};
