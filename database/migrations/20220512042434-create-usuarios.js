'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    

     await queryInterface.createTable('usuarios', 
     { 
        id: {
         type: Sequelize.DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
        nome: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
      },
        foto: {
          type: Sequelize.DataTypes.STRING
      },
        nascimento: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false
      },
        endereco: {
          type: Sequelize.DataTypes.STRING,
      },
        classe: {
          type: Sequelize.DataTypes.BOOLEAN,
      },
        sexo: {
          type: Sequelize.DataTypes.CHAR(1),
          allowNull: false
        },        
        email: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
          unique: true
      },              
        senha: {
          type: Sequelize.DataTypes.STRING(64),
          allowNull: false
    },
          createdAt: Sequelize.DataTypes.DATE,
          updatedAt: Sequelize.DataTypes.DATE,
          deletedAt: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {    

     await queryInterface.dropTable('usuarios');
  }
};