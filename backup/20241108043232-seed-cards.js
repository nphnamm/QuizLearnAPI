'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [
      {
        setId: 1,
        term: 'Cell',
        definition: 'The basic unit of life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setId: 1,
        term: 'Photosynthesis',
        definition: 'Process by which plants make their food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setId: 2,
        term: 'Newton’s First Law',
        definition: 'An object in motion stays in motion unless acted upon by an external force',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setId: 3,
        term: 'Pythagorean Theorem',
        definition: 'a² + b² = c²',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
