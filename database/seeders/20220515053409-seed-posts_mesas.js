

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('posts_mesas', [
    {
      id: 1,
      pinned: 4,
      status: 2,
      post: 3,
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    },
    {
      id: 2,
      pinned: 5,
      status: 1,
      post: "loremloremloremlorem2emlore",
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    },
    {
      id: 3,
      pinned: 3,
      status: 2,
      post: "loremloremloremlorem2emlorrem2",
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      deletedAt: new Date().toISOString().substring(0,19),
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('posts_mesas', null, {});
     
  }
};
