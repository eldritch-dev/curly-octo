'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product', onDelete: 'CASCADE' });
      Detail.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sale', onDelete: 'CASCADE' });
    }
  };
  Detail.init({
    sale_id: { 
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.Sale,
        key: 'id'
      },
      allowNull: false
    },
    quantity: { 
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.Product,
        key: 'id'
      },
      allowNull: false
    },
    subtotal: { 
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};