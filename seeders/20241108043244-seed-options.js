'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Options', [
      { questionId: 1, optionText: 'Cell', createdAt: new Date(), updatedAt: new Date() },
      { questionId: 1, optionText: 'Atom', createdAt: new Date(), updatedAt: new Date() },
      { questionId: 2, optionText: 'Respiration', createdAt: new Date(), updatedAt: new Date() },
      { questionId: 2, optionText: 'Photosynthesis', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Options', null, {});
  }
};
