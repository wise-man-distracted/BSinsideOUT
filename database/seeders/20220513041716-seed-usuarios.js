const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('usuarios', [
    {
      id: 1,
      nome: 'Bruce Banner',
      nascimento: "1982-05-11",
      endereco: "Praça Recanto Trovadores 1283",
      classe: 1,
      sexo: "M",
      email: "bruce@teste.com",
      senha: bcrypt.hashSync("12345678", 10),
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19)
    },
    {
      id: 2,
      nome: 'Tony Stark',
      nascimento: "1989-12-21",
      endereco: "Rua dos Expedicionários 873",
      classe: 2,
      sexo: "M",
      email: "tony@teste.com",
      senha: bcrypt.hashSync("123458", 10),
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19)
    },
    {
      id: 3,
      nome: 'Jean Grey',
      nascimento: "1988-04-13",
      endereco: "Rua Barão Capanema 879",
      classe: 3,
      sexo: "F",
      email: "jeangrey@teste.com",
      senha: bcrypt.hashSync("jean123", 10),
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19)
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
