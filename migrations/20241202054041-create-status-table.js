'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Statuses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });

    // Insert default statuses if needed
    await queryInterface.bulkInsert('Statuses', [
      { status_name: 'active', description: 'Active user', createdAt: new Date(), updatedAt: new Date() },
      { status_name: 'inactive', description: 'Inactive user', createdAt: new Date(), updatedAt: new Date() },
      { status_name: 'deleted', description: 'User has been deleted', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Statuses');
  },
};
