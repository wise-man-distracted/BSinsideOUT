

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('usuarios_in_mesas', [
    {
      id: 1,
      status: 2,
      usuarios_id: 2,
      mesas_id: 1,
      createdAt: new Date()
    },
    {
      id: 2,
      status: 0,
      usuarios_id: 3,
      mesas_id: 2,
      createdAt: new Date()
    },
    {
      id: 3,
      status: 1,
      usuarios_id: 1,
      mesas_id: 3,
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios_in_mesas', null, {});
     
  }
};
