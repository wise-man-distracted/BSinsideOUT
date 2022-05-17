module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('artigos', [
    {
      id: 1,
      titulo: "artigo_1",
      conteudo: "conteúdo do artigo 1 aqui",
      data: "2022-05-17",
      usuarios_id: 1,
      categorias_id: 2,
      descricao_curta: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      imagem1: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem2: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem3: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: new Date()
    },
    {
      id: 2,
      titulo: "artigo_2",
      conteudo: "conteúdo do artigo 2 aqui",
      data: "2022-05-16",
      usuarios_id: 2,
      categorias_id: 4,
      descricao_curta: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      imagem1: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem2: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem3: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: new Date()
    },
    {
      id: 3,
      titulo: "artigo_3",
      conteudo: "conteúdo do artigo 3 aqui",
      data: "2022-05-15",
      usuarios_id: 3,
      categorias_id: 5,
      descricao_curta: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      imagem1: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem2: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imagem3: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('artigos', null, {});
     
  }
};