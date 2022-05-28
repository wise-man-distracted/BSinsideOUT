module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('itens_pedidos', [
    {
      id: 1,
      quantidade: 6,
      pedidos_id: 1,
      usuarios_id: 1,
      produtos_id: 3,
      
    },
    {
      id: 2,
      quantidade: 7,
      pedidos_id: 2,
      usuarios_id: 2,
      produtos_id: 1,
      
    },
    {
      id: 3,
      quantidade: 8,
      pedidos_id: 3,
      usuarios_id: 3,
      produtos_id: 2,
      
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('itens_pedidos', null, {});
     
  }
};