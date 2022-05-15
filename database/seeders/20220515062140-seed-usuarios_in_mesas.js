

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('usuarios_in_mesas', [
    {
      id: 1,
      status: 2,
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    },
    {
      id: 2,
      status: 3,
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    },
    {
      id: 3,
      status: 4,
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios_in_mesas', null, {});
     
  }
};
