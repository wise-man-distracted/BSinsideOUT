'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('artigos', [
    {
      id: 1,
      titulo: "MORE COMPETITIVE FORMATS MIGHT BE TOO INTENSE",
      conteudo: `A primeira é um trio de opções de raça dracônica apresentadas como uma alternativa à raça draconato do Livro do Jogador, bem como uma nova visão da raça kobold. Em seguida, vem um punhado de opções de talentos que refletem uma conexão com o poder dracônico. Finalmente, uma seleção de feitiços – muitos deles com nomes de dragões famosos ou infames – oferece uma variedade de abordagens para manifestar a magia dracônica. A versão final desse material saiu nos livros Fizban Treasury of Dragons e Mordenkainen Presents: Monsters of the Multiverse.`,
      data: new Date(),
      descricao_curta: "As a Magic: The Gathering player gains experience and skill, they might feel ready to get into a more competitive format such as Modern or Legacy, only to be overwhelmed by what they find.",
      img_1: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/grand-abolisher-mtg.jpg?q=50&fit=crop&w=750&dpr=1.5",
      img_2: "",
      img_3: "",
      usuarios_id: 2,
      categorias_id: 3,
      createdAt: new Date()
    },
    {
      id: 2,
      titulo: "10 Harsh Realities Of Being A Magic: The Gathering Fan",
      conteudo: `Magic: The Gathering has been going strong since its release in August 1993 as the world's first trading card game, later joined by its competitors such as Yu-Gi-Oh!, the Pokémon TCG, and more. MTG certainly had some growing pains, such as getting rid of the gambling-style ante rules and figuring out the rules for legendary creatures, but the game is bigger and better than ever now.`,
      data: new Date(),
      descricao_curta: "Playing Magic: The Gathering is wonderful, but this game can also be a tough hobby to pursue at times.",
      img_1: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/Featured-image-for-an-article-about-the-harsh-realities-of-being-a-Magic-The-Gathering-fan.jpg?q=50&fit=contain&w=750&h=&dpr=1.5",
      img_2: "",
      img_3: "",
      usuarios_id: 1,
      categorias_id: 2,
      createdAt: new Date()
    },
    {
      id: 3,
      titulo: "Claymore | Quando o animê supera um já excelente mangá",
      conteudo: `Claymore é a história de Clare, membro de uma organização de mulheres que lutam contra os Yoma, espécie de demônio que se alimenta de carne humana, em troca de dinheiro. Para serem capazes de derrotá-los, porém, carne e sangue Yoma foram inseridos em seus corpos, fazendo com que se tornassem metade humanas, metade Yoma. Essas guerreiras são chamadas de “Claymores” devido ao tipo de espadas que usam, que leva esse nome, ou de “Bruxas dos Olhos Prateados”, culpa da coloração que seus olhos recebem após se tornarem membros da organização.

`,
      data: new Date(),
      descricao_curta: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      img_1: "https://www.portallos.com.br/wp-content/uploads/2009/11/claymore.jpg",
      img_2: "",
      img_3: "",
      usuarios_id: 3,
      categorias_id: 1,
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('artigos', null, {});
     
  }
};
