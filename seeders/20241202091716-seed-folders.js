'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert sample folders with valid statusId and userId
    await queryInterface.bulkInsert('Folders', [
      {
        name: 'Science Collection',
        description: 'A collection of science-related sets.',
        statusId: 1, // Assuming 1 is a valid status ID
        userId: 3, // Assuming 1 is a valid user ID (replace with actual ID)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Math Collection',
        description: 'A collection of math-related sets.',
        statusId: 1, // Assuming 1 is a valid status ID
        userId: 4, // Assuming 1 is a valid user ID (replace with actual ID)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'History Collection',
        description: 'A collection of history-related sets.',
        statusId: 2, // Assuming 2 is a valid status ID
        userId: 3, // Assuming 2 is a valid user ID (replace with actual ID)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // You can clear the folder entries with the following:
    await queryInterface.bulkDelete('Folders', null, {});
  }
};
