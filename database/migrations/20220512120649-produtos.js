'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('produtos', 
     { 
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      distribuidor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },            
      preco: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      rating: {
        type: Sequelize.DataTypes.TINYINT(1),
      },
      img_1: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      img_2: {
        type: Sequelize.DataTypes.STRING
      },
      img_3: {
        type: Sequelize.DataTypes.STRING
      },
      img_4: {
        type: Sequelize.DataTypes.STRING
      },   
      estoque: {
        type: Sequelize.DataTypes.INTEGER
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },      
      descricao_curta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },  
      categorias_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "categorias_produtos"
          },
          key:"id"
        }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      deletedAt: Sequelize.DataTypes.DATE
     }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
