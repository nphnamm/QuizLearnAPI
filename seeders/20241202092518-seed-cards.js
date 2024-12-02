'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        setId: 2, // Assuming Set with ID 1 exists
        term: 'JavaScript',
        definition: 'A high-level, just-in-time compiled, and multi-paradigm programming language.',
        image: 'https://example.com/images/js.png', // Example image URL
        statusId: 1, // Assuming Status with ID 1 (e.g., active)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        setId: 2, // Assuming Set with ID 1 exists
        term: 'Node.js',
        definition: 'An open-source, cross-platform, back-end JavaScript runtime environment.',
        image: 'https://example.com/images/nodejs.png', // Example image URL
        statusId: 1, // Assuming Status with ID 1 (active)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        setId: 2, 
        term: 'React',
        definition: 'A JavaScript library for building user interfaces, maintained by Facebook.',
        image: 'https://example.com/images/react.png',
        statusId: 2, // Assuming Status with ID 2 (inactive)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        setId: 3, // Assuming Set with ID 2 exists
        term: 'Redux',
        definition: 'A predictable state container for JavaScript apps.',
        image: 'https://example.com/images/redux.png', // Example image URL
        statusId: 1, // Assuming Status with ID 1 (active)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
