module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('amizades', [
    {
      id: 1,
      status: 3,
      usuarios_id1: 2,
      usuarios_id2: 2,

    },
    {
      id: 2,
      status: 1,
      usuarios_id1: 3,
      usuarios_id2: 2,

    },
    {
      id: 3,
      status: 2,
      usuarios_id1: 1,
      usuarios_id2: 2,
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('amizades', null, {});
     
  }
};