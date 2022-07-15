'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('produtos', [
    {
      id: 1,
      nome: "Strixhaven: Curriculum of Chaos",
      distribuidor: "Devir Brasil",
      preco: 190.79,
      rating: 4,
      img_1: "/public/images/shop/product1.jpg",
      img_2: "/public/images/shop/product1.jpg",
      img_3: "/public/images/shop/product1.jpg",
      img_4: "/public/images/shop/product1.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 2,
      nome: "Pathfinder: Worldscape",
      distribuidor: "Devir Brasil",
      preco: 350.23,
      rating: 4,
      img_1: "/public/images/shop/product2.jpg",
      img_2: "/public/images/shop/product2.jpg",
      img_3: "/public/images/shop/product2.jpg",
      img_4: "/public/images/shop/product2.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 3,
      nome: "Fizban's Treasury of Dragons",
      distribuidor: "Devir Brasil",
      preco: 190.71,
      rating: 4,
      img_1: "/public/images/shop/product3.jpg",
      img_2: "/public/images/shop/product3.jpg",
      img_3: "/public/images/shop/product3.jpg",
      img_4: "/public/images/shop/product3.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 4,
      nome: "Tormenta20 — Livro Básico",
      distribuidor: "Devir Brasil",
      preco: 156.17,
      rating: 4,
      img_1: "/public/images/shop/product4.jpg",
      img_2: "/public/images/shop/product4.jpg",
      img_3: "/public/images/shop/product4.jpg",
      img_4: "/public/images/shop/product4.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 5,
      nome: "MTG - Modern Horizons 2 x3",
      distribuidor: "Devir Brasil",
      preco: 228.69,
      rating: 4,
      img_1: "/public/images/shop/product5.jpg",
      img_2: "/public/images/shop/product5.jpg",
      img_3: "/public/images/shop/product5.jpg",
      img_4: "/public/images/shop/product5.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 6,
      nome: "Tormenta Rpg - Só Aventuras Vo",
      distribuidor: "Devir Brasil",
      preco: 26.00,
      rating: 4,
      img_1: "/public/images/shop/product6.jpg",
      img_2: "/public/images/shop/product6.jpg",
      img_3: "/public/images/shop/product6.jpg",
      img_4: "/public/images/shop/product6.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 7,
      nome: "MTG - Nova Capenna x3",
      distribuidor: "Devir Brasil",
      preco: 89.60,
      rating: 4,
      img_1: "/public/images/shop/product7.jpg",
      img_2: "/public/images/shop/product7.jpg",
      img_3: "/public/images/shop/product7.jpg",
      img_4: "/public/images/shop/product7.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 8,
      nome: "Tormenta20 — Coração de Rub",
      distribuidor: "Devir Brasil",
      preco: 59.82,
      rating: 4,
      img_1: "/public/images/shop/product8.jpg",
      img_2: "/public/images/shop/product8.jpg",
      img_3: "/public/images/shop/product8.jpg",
      img_4: "/public/images/shop/product8.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 9,
      nome: "Pathfinder: Horror Adventures",
      distribuidor: "Devir Brasil",
      preco: 383.00,
      rating: 4,
      img_1: "/public/images/shop/product9.jpg",
      img_2: "/public/images/shop/product9.jpg",
      img_3: "/public/images/shop/product9.jpg",
      img_4: "/public/images/shop/product9.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 10,
      nome: "Bloodborne: The Board Game",
      distribuidor: "Devir Brasil",
      preco: 774.90,
      rating: 4,
      img_1: "/public/images/shop/product10.jpg",
      img_2: "/public/images/shop/product10.jpg",
      img_3: "/public/images/shop/product10.jpg",
      img_4: "/public/images/shop/product10.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 11,
      nome: "Pathfinder: Sandpoint",
      distribuidor: "Devir Brasil",
      preco: 339.58,
      rating: 4,
      img_1: "/public/images/shop/product11.jpg",
      img_2: "/public/images/shop/product11.jpg",
      img_3: "/public/images/shop/product11.jpg",
      img_4: "/public/images/shop/product11.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    },
    {
      id: 12,
      nome: "World of Warcraft - WoLK",
      distribuidor: "Devir Brasil",
      preco: 449.96,
      rating: 4,
      img_1: "/public/images/shop/product12.jpg",
      img_2: "/public/images/shop/product12.jpg",
      img_3: "/public/images/shop/product12.jpg",
      img_4: "/public/images/shop/product12.jpg",
      estoque: 5,
      descricao: `Ex nostrud reprehenderit mollit commodo consectetur in nisi eu do anim consequat qui nulla incididunt. Et consectetur culpa dolore aliqua enim aute mollit. Amet et officia nisi esse excepteur labore ex occaecat aliquip.

Duis irure consectetur qui sit veniam enim minim aliqua et consectetur laboris. Ad cupidatat consequat nulla est fugiat. Adipisicing est proident aute nulla ullamco ea et. Est in eiusmod incididunt anim dolor proident. Deserunt ea non culpa exercitation proident voluptate. Est cillum eiusmod velit irure. In fugiat ullamco magna cupidatat velit id qui voluptate.

Fugiat est commodo tempor ad ad pariatur reprehenderit quis do dolor ut proident excepteur. Ut adipisicing sunt proident aute exercitation nostrud elit qui ipsum elit nostrud adipisicing deserunt id. Dolore ullamco cupidatat adipisicing ut anim. Exercitation reprehenderit consequat consectetur sint. Duis tempor irure consectetur excepteur. Reprehenderit ex velit ex mollit cupidatat incididunt laboris.

Duis aliquip culpa laborum reprehenderit culpa sit eu. Aute ea officia nostrud sit proident cupidatat laborum ullamco dolor. Sunt amet Lorem veniam anim velit tempor do cupidatat deserunt ut Lorem. Quis do Lorem duis reprehenderit est. Occaecat deserunt elit ipsum nulla duis enim adipisicing.

Exercitation ad irure nostrud deserunt aliqua. Do consequat ut deserunt culpa. Sunt sunt cillum est ipsum ullamco. Est ex labore esse nostrud laboris dolore labore et labore ipsum duis nisi laboris.`,
      descricao_curta: "Aliqua nulla deserunt eu eu pariatur.",
      categorias_id: 5,
      createdAt: new Date()
    }

    
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
