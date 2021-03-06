'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    

     await queryInterface.createTable('mesas', 
     { 
        id: {
         type: Sequelize.DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
        },
        status: {
          type: Sequelize.DataTypes.TINYINT(1),
          allowNull: false
        },
        nome: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
        duracao: {
          type: Sequelize.DataTypes.STRING(100),
        },
        frequencia_encontros: {
          type: Sequelize.DataTypes.STRING(100),
        },
        max_players: {
          type: Sequelize.DataTypes.TINYINT(1),
          allowNull: false
        },
        campanha: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
        regras: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        },        
        sistema: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
        cover_img: {
          type: Sequelize.DataTypes.STRING,
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
          createdAt: Sequelize.DataTypes.DATE,
          updatedAt: Sequelize.DataTypes.DATE,          

      }
    );
  },

  async down (queryInterface, Sequelize) {    

     await queryInterface.dropTable('mesas');
  }
};