'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('mesas', [
    {
      id: 1,
      status: 3,
      nome: "mesa1",
      duracao: "1 mês",
      frequencia_encontros: "sexta-feira",
      max_players: 6,
      settings: "mesa aberta às sextas, durante 1 mês",
      regras: "Morreu, ta fora",
      sistema: "Não definido",
      cover_img: "mesa.jpg",
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),
      
      
      
    },
    {
      id: 2,
      status: 2,
      nome: "mesa2",
      duracao: "1 semana",
      frequencia_encontros: "segunda à sexta",
      max_players: 5,
      settings: "mesa aberta todos os dias, durante 1 semana",
      regras: "Proibido matar outros players.",
      sistema: "Não definido",
      cover_img: "mesa.jpg",
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),

    },
    {
      id: 3,
      status: 1,
      nome: "mesa3",
      duracao: "1 ano",
      frequencia_encontros: "todos os dias",
      max_players: 9,
      settings: "mesa aberta às sextas, durante 1 mês",
      regras: "Não definido",
      sistema: "Não definido",
      cover_img: "mesa.jpg",
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19),

    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('mesas', null, {});
     
  }
};
