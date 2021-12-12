'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Details', [{
      sale_id: 1,
      quantity: 1,
      product_id: 1,
      subtotal: 1420,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sale_id: 1,
      quantity: 2,
      product_id: 2,
      subtotal: 2090,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sale_id: 1,
      quantity: 1,
      product_id: 5,
      subtotal: 1290,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sale_id: 2,
      quantity: 1,
      product_id: 6,
      subtotal: 789,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Details', null, {});
  }
};
