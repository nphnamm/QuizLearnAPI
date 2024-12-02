'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        cardId: 1,
        questionText: 'What is the basic unit of life?',
        correctOptionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardId: 2,
        questionText: 'How do plants make their food?',
        correctOptionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
