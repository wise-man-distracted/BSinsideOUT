module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('comentarios_artigos', [
    {
      id: 1,
      titulo: "Boa leitura",
      rating: 7,
      comentario: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      artigos_id: 2,
      usuarios_id: 3,
      createdAt: new Date()
    },
    {
      id: 2,
      titulo: "Agora faz sentido",
      rating: 8,
      comentario: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      artigos_id: 1,
      usuarios_id: 2,
      createdAt: new Date()
    },
    {
      id: 3,
      titulo: "Muito longo, não li",
      rating: 5,
      comentario: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      artigos_id: 3,
      usuarios_id: 1,
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('comentarios_artigos', null, {});
     
  }
};