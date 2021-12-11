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
      this.hasMany(models.Detail, { foreignKey: 'id', as: 'details' })
      this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client', onDelete: 'cascade' })
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
      allowNull: true,
      defaultValue: 19
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: { 
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};