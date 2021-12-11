'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.hasMany(models.Detail, { foreignKey: 'sale_id', as: 'details' })
      Sale.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
    }
  };
  Sale.init({
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.Client,
        key: 'id'
      },
      allowNull: false
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 19
    },
    discount: {
      type: DataTypes.INTEGER
    },
    total: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};