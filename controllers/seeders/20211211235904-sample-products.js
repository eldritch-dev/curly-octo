'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  queryInterface.bulkInsert('Products', [{
      name: 'Rice 1kg',
      price: 1420,
      stock: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Strips 900gr',
      price: 2090,
      stock: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Spaghetti 400gr',
      price: 700,
      stock: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tomato Sauce 200gr',
      price: 479,
      stock: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Orange Juice 1.5L',
      price: 1290,
      stock: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Purified Water 1L',
      price: 789,
      stock: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wet Wipes 30 units',
      price: 3399,
      stock: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Toilet Paper 8 units',
      price: 1000,
      stock: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Torobayo Beer 330cc',
      price: 1590,
      stock: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Apple Rum 750cc',
      price: 8790,
      stock: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
