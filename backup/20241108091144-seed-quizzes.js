'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Quizzes', [
      {
        setId: 1,
        title: 'Biology Quiz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setId: 2,
        title: 'Physics Quiz',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quizzes', null, {});
  }
};
