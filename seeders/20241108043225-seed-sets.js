'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sets', [
      {
        userId: 1,
        title: 'Biology Basics',
        description: 'Basic terms and definitions for biology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Physics Concepts',
        description: 'Key concepts and laws in physics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'Mathematics Formulas',
        description: 'Common formulas used in mathematics',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sets', null, {});
  }
};
