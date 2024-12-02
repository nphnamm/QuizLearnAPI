'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        email: 'user1@example.com',
        passwordHash: 'hashedpassword1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        passwordHash: 'hashedpassword2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        email: 'user3@example.com',
        passwordHash: 'hashedpassword3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
