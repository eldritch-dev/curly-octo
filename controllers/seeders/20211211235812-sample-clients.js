'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      name: 'Juan Orellana',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Daniela Sepúlveda',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Christopher Gómez',
      status: 'Disabled',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Carolina Aravena',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pedro Torres',
      status: 'Disabled',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
