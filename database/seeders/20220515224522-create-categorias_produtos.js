'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let categorias = [];
    for (let i = 1; i <= 6; i++) {
      categorias.push(
        {
          id: i,
          nome: `Categoria ${i}`,
          createdAt: new Date()
        }
      )
    }

    await queryInterface.bulkInsert('categorias_produtos', categorias, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('categorias_produtos', null, {});

  }
};
