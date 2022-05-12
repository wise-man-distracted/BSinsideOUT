'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('artigos', 
    { 
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo:{
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
      },
      conteudo: {
        type: Sequelize.DataTypes.STRING(10000),
        allowNull: false
      },
      data: {
        type: Sequelize.DataTypes.DATE,
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
      categorias_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "categorias_artigos"
          },
          key:"id"
        }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      deletedAt: Sequelize.DataTypes.DATE
    }
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('artigos');
  }
};
