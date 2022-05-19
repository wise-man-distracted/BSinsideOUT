module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('comentarios_produtos', [
    {
      id: 1,
      comentario: `Sit nostrud voluptate occaecat quis veniam cillum.`,
      rating: 5,
      usuarios_id: 1,
      produtos_id: 3,
      titulo: "Não Gostei",
      
    },
    {
      id: 2,
      comentario: `Irure ea qui veniam eu mollit reprehenderit est dolore laboris ea ullamco nostrud veniam.`,
      rating: 3,
      usuarios_id: 3,
      produtos_id: 2,
      titulo: "Muito Bom!",
      
    },
    {
      id: 3,
      comentario: `Nulla excepteur sunt ea laboris nisi qui esse esse nostrud.`,
      rating: 9,
      usuarios_id: 2,
      produtos_id: 1,
      titulo: "Rapazzzz",
      
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('comentarios_produtos', null, {});
     
  }
};