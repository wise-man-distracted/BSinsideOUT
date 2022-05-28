module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('inbox', [
    {
      id: 1,
      msg: `Mollit officia pariatur tempor nisi ex ex culpa.`,
      usuarios_id1: 1,
      usuarios_id2: 2,

    },
    {
      id: 2,
      msg: `Est Lorem proident eu eiusmod adipisicing minim nostrud fugiat do.`,
      usuarios_id1: 2,
      usuarios_id2: 3,

    },
    {
      id: 3,
      msg: `Amet veniam do commodo incididunt ad cillum voluptate consectetur esse sint ad sit.`,
      usuarios_id1: 3,
      usuarios_id2: 1,
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('inbox', null, {});
     
  }
};