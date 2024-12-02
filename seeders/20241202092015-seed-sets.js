'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sets', [
      {
        userId: 3, // Replace with a valid userId
        title: 'Science Set',
        description: 'A set containing various science topics.',
        statusId: 1, // Replace with a valid statusId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3, // Replace with a valid userId
        title: 'Math Set',
        description: 'A set for practicing math concepts.',
        statusId: 1, // Replace with a valid statusId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4, // Replace with a valid userId
        title: 'History Set',
        description: 'A set for studying historical events.',
        statusId: 2, // Replace with a valid statusId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sets', null, {});

  }
};
