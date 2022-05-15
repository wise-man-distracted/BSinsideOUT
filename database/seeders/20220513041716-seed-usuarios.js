const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('usuarios', [
    {
      id: 1,
      nome: 'Bruce Banner',
      foto: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      nascimento: "1982-05-11",
      endereco: "Praça Recanto Trovadores 1283",
      classe: 1,
      sexo: "M",
      email: "bruce@teste.com",
      senha: bcrypt.hashSync("123456", 10),
      createdAt: new Date()
    },
    {
      id: 2,
      nome: 'Tony Stark',
      foto: "https://images.unsplash.com/photo-1579880651719-3cef00eae7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      nascimento: "1989-12-21",
      endereco: "Rua dos Expedicionários 873",
      classe: 2,
      sexo: "M",
      email: "tony@teste.com",
      senha: bcrypt.hashSync("123456", 10),
      createdAt: new Date()
    },
    {
      id: 3,
      nome: 'Jean Grey',
      foto: "https://images.unsplash.com/photo-1620794108219-aedbaded4eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      nascimento: "1988-04-13",
      endereco: "Rua Barão Capanema 879",
      classe: 3,
      sexo: "F",
      email: "jeangrey@teste.com",
      senha: bcrypt.hashSync("123456", 10),
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
