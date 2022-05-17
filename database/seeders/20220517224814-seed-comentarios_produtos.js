module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('comentarios_produtos', [
    {
      id: 1,
      comentario: "comentário do produto 1 aqui",
      rating: 5,
      usuarios_id: 1,
      produtos_id: 3,
      titulo: "comentário do titulo aqui",
      
    },
    {
      id: 2,
      comentario: "comentário do produto 2 aqui",
      rating: 3,
      usuarios_id: 3,
      produtos_id: 2,
      titulo: "comentário do titulo aqui",
      
    },
    {
      id: 3,
      comentario: "comentário do produto 3 aqui",
      rating: 9,
      usuarios_id: 2,
      produtos_id: 1,
      titulo: "comentário do titulo aqui",
      
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('comentarios_produtos', null, {});
     
  }
};