'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sets', [
      {
        userId: 1,
        title: 'Biology Basics',
        description: 'Basic terms and definitions for biology',
        statusId: 1,  // Assuming statusId 1 corresponds to "active" or another valid status
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Physics Concepts',
        description: 'Key concepts and laws in physics',
        statusId: 2,  // Assuming statusId 2 corresponds to another valid status
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'Mathematics Formulas',
        description: 'Common formulas used in mathematics',
        statusId: 1,  // Assuming statusId 1 corresponds to "active" or another valid status
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sets', null, {});
  }
};
