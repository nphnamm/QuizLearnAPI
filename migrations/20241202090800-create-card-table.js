'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      setId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Sets', // Reference to the Sets table
          key: 'id',
        },
        onDelete: 'CASCADE', // If the Set is deleted, delete associated Cards
        onUpdate: 'CASCADE', // Update the foreign key on Set update
      },
      term: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      definition: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: true,
        validate: {
          isUrl: true, // Ensures that the image is a valid URL (optional)
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Statuses', // Reference to the Statuses table
          key: 'id',
        },
        defaultValue: 1, // Default status ID (could be active or any other)
        onDelete: 'SET NULL', // If the Status is deleted, set the statusId to NULL
        onUpdate: 'CASCADE', // Update the foreign key on Status update
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  },
};
