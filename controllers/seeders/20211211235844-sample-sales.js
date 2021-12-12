'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sales', [{
      client_id: 1,
      tax: 19,
      discount: 3,
      total: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      client_id: 2,
      tax: 19,
      discount: 1,
      total: 9999,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sales', null, {});
  }
};
