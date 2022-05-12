'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarios_produtos',
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },      
      comentario: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      rating: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: true
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
      produtos_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "produtos"
          },
          key:"id"
        }
      },
          createdAt: Sequelize.DataTypes.DATE,
          updatedAt: Sequelize.DataTypes.DATE,
          deletedAt: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarios_produtos');
  }
};