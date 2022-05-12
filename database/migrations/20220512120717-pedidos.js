'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('pedidos',
     { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      frete: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      tipo_pagamento: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
      },
      valor_total: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      usuarios_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key:"id"
        }
      },
     }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
