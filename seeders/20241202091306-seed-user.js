'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        passwordHash: 'hashedpassword123', // Use a real hash in production
        avatar: 'https://example.com/avatar/john_doe.png',
        statusId: 1, // Assuming statusId 1 is for "active"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jane_smith',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '0987654321',
        passwordHash: 'hashedpassword456', // Use a real hash in production
        avatar: 'https://example.com/avatar/jane_smith.png',
        statusId: 1, // Assuming statusId 1 is for "active"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
