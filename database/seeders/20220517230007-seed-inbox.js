module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('inbox', [
    {
      id: 1,
      msg: "mensagem do inbox aqui",
      usuarios_id1: 1,
      usuarios_id2: 1,

    },
    {
      id: 2,
      msg: "mensagem do inbox aqui",
      usuarios_id1: 2,
      usuarios_id2: 3,

    },
    {
      id: 3,
      msg: "mensagem do inbox aqui",
      usuarios_id1: 3,
      usuarios_id2: 1,
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('inbox', null, {});
     
  }
};