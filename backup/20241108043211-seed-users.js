'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample users with a valid statusId
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        email: 'user1@example.com',
        passwordHash: 'hashedpassword1',
        statusId: 1, // Assuming 1 corresponds to 'active' status
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        passwordHash: 'hashedpassword2',
        statusId: 2, // Assuming 2 corresponds to 'inactive' status
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        email: 'user3@example.com',
        passwordHash: 'hashedpassword3',
        statusId: 1, // Assuming 1 corresponds to 'active' status
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all users during rollback
    await queryInterface.bulkDelete('Users', null, {});
  }
};
