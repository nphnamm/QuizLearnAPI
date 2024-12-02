'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Sets', 'folderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 3, 
      references: {
        model: 'Folders',
        key: 'id',
      },
      onDelete: 'CASCADE', // If a folder is deleted, delete related sets
      onUpdate: 'CASCADE', // Update related sets if the folder ID is updated
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sets', 'folderId');
  }
};
