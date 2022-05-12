'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('categorias_prudutos', 
     { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        },
      nome: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      deletedAt: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('categorias_produtos');
  }
};
