'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('categorias_produtos', 
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
      img: {
        type: Sequelize.DataTypes.STRING
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
