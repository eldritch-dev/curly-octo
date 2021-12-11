'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sale, { foreignKey: 'id', as: 'sales' })
    }
  };
  Client.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Client has to have a name' },
        notEmpty: { msg: 'The name can not be empty' }
      }
    },
    status: { 
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active"
    }
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};