module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('comentarios_artigos', [
    {
      id: 1,
      titulo: "título do comentário artigo 1",
      rating: 7,
      comentario: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      artigos_id: 2,
      usuarios_id: 3,
      createdAt: new Date()
    },
    {
      id: 2,
      titulo: "título do comentário artigo 2",
      rating: 8,
      comentario: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      artigos_id: 1,
      usuarios_id: 2,
      createdAt: new Date()
    },
    {
      id: 3,
      titulo: "título do comentário artigo 3",
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