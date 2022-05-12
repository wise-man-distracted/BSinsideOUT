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
        nascimento: {
          type: Sequelize.DataTypes.DATEONLY(),
          allowNull: false
      },
        endereco: {
          type: Sequelize.DataTypes.STRING(),
          allowNull: false
      },
        classe: {
          type: Sequelize.DataTypes.BOOLEAN(),
          allowNull: false
      },
        sexo: {
          type: Sequelize.DataTypes.CHAR(1),
          allowNull: false
        },        
        email: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
      },              
        senha: {
          type: Sequelize.DataTypes.STRING(64),
          allowNull: false
    }
      }
    );
  },

  async down (queryInterface, Sequelize) {    

     await queryInterface.dropTable('usuarios');
  }
};