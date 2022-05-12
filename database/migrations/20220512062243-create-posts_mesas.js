'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_mesas',
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },      
      pinned: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: true
      },
      status: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: true
      },
      post: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true
      },      
      mesas_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "mesas"
          },
          key:"id"
        }
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
          createdAt: Sequelize.DataTypes.DATE,
          updatedAt: Sequelize.DataTypes.DATE,
          deletedAt: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_mesas');
  }
};