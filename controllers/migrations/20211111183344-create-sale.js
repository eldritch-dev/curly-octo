'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        references: {
          model: {
            tableName: 'Clients'
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tax: {
        allowNull: false,
        defaultValue: 19,
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      total: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};