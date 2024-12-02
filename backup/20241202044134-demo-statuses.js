'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [
      { status_name: 'active', description: 'The record is active', createdAt: new Date(), updatedAt: new Date() },
      { status_name: 'inactive', description: 'The record is inactive', createdAt: new Date(), updatedAt: new Date() },
      { status_name: 'pending', description: 'Pending approval', createdAt: new Date(), updatedAt: new Date() },
      { status_name: 'deleted', description: 'Soft deleted', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});

  }
};
