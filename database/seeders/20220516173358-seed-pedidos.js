module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('pedidos', [
    {
      id: 1,
      status: 1,
      frete: 2500,
      cep: "30170-110",
      tipo_pagamento: "Pix",
      valor_total: 55500,
      usuarios_id: 1,
      createdAt: new Date()
    },
    {
      id: 2,
      status: 2,
      frete: 0,
      cep: "33030-050",
      tipo_pagamento: "Crédito",
      valor_total: 55500,
      usuarios_id: 2,
      createdAt: new Date()
    },
    {
      id: 3,
      status: 0,
      frete: 4500,
      cep: "31055-000",
      tipo_pagamento: "Boleto",
      valor_total: 55500,
      usuarios_id: 3,
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('pedidos', null, {});
     
  }
};