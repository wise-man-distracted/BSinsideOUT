'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios_in_mesas',
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: true
      },  
      usuarios_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model:{
            tableName: "usuarios"
          },
          key:"id"
        }
      },
      mesas_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model:{
            tableName: "mesas"
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
    await queryInterface.dropTable('usuarios_in_mesas');
  }
};
