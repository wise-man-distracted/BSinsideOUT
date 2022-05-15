'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('mesas', [
    {
      id: 1,
      status: 3,
      nome: "Lacaios do Sôgera",
      duracao: "1 mês",
      frequencia_encontros: "sexta-feira",
      max_players: 6,
      campanha: "Neverwinter Nights",
      regras: "Morreu, ta fora",
      sistema: "Savage Worlds",
      cover_img: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      usuarios_id: 2,
      createdAt: new Date()
      
      
      
    },
    {
      id: 2,
      status: 2,
      nome: "Bendito Bernevindes",
      duracao: "1 semana",
      frequencia_encontros: "segunda à sexta",
      max_players: 5,
      campanha: "Eye of the Beholder",
      regras: "Proibido matar outros players.",
      sistema: "PbtA",
      cover_img: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80",
      usuarios_id: 3,
      createdAt: new Date()

    },
    {
      id: 3,
      status: 1,
      nome: "Mesa do Capitão de Areia",
      duracao: "1 ano",
      frequencia_encontros: "todos os dias",
      max_players: 9,
      campanha: "Call of Cthulhu",
      regras: "Não definido",
      sistema: "Old Dragon",
      cover_img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
      usuarios_id: 1,
      createdAt: new Date()

    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('mesas', null, {});
     
  }
};
