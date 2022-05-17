'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('produtos', [
    {
      id: 1,
      nome: "Trono do Rei das Trevas",
      distribuidor: "Devir Brasil",
      preco: 19500,
      rating: 4,
      img_1: "https://images.unsplash.com/photo-1591206248155-84ce55561d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img_2: "https://images.unsplash.com/photo-1601737827825-d2ce5db1dff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      img_3: "https://images.unsplash.com/photo-1587462573426-9f33446c3a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRocm9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      img_4: "https://images.unsplash.com/photo-1577892209303-4b1352c6162a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
      nome: "Caverna Maldita do Goblin Sangrento",
      distribuidor: "UGCardShop",
      preco: 35000,
      rating: 3,
      img_1: "https://images.unsplash.com/photo-1602525036133-f07294d74bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img_2: "https://images.unsplash.com/photo-1550992402-9b1fc58fd76d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2ZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img_3: "https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img_4: "https://images.unsplash.com/photo-1615304126448-b0793f496c4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      estoque: 7,
      descricao: `Ullamco tempor esse labore qui nisi deserunt cupidatat nostrud adipisicing. Tempor Lorem fugiat fugiat Lorem. Eu eu sint Lorem consequat sit excepteur. Sint aliqua ad minim deserunt tempor ad esse amet et. Pariatur ullamco ipsum nisi eiusmod et id quis aliquip eu.

Commodo consectetur sit dolore laborum consequat do excepteur culpa consequat. Adipisicing sit aute aliquip enim deserunt. Cupidatat nisi culpa commodo deserunt labore eu anim elit fugiat tempor et mollit irure do. Cupidatat sint laborum aliquip anim Lorem et fugiat. Aute velit non ut nostrud sit cupidatat incididunt mollit laborum et proident. Esse nisi mollit nulla nulla ea irure esse non quis non proident. Velit anim minim aliquip quis incididunt officia laborum id voluptate.

Cupidatat cupidatat eiusmod exercitation commodo qui dolore non irure cillum aliquip occaecat aliquip esse. Consequat et culpa reprehenderit esse sit non nostrud ea. Exercitation ipsum nulla anim esse sit excepteur eu nisi irure laborum sunt cillum voluptate consectetur. Laborum sunt et sunt ex sit.

Ipsum Lorem laboris dolore tempor. Aliquip fugiat nulla nostrud Lorem dolor ullamco labore incididunt id. Lorem nulla et et tempor aliqua. Lorem cillum Lorem voluptate amet reprehenderit fugiat anim occaecat. Esse duis sit ad sunt qui Lorem pariatur tempor irure elit excepteur minim. Nisi consectetur minim tempor tempor.

Pariatur laborum ex nisi quis adipisicing sunt. Nostrud aute pariatur adipisicing ex adipisicing ex officia occaecat exercitation voluptate dolore in. Reprehenderit deserunt cupidatat do amet adipisicing ut excepteur aliqua dolor laborum dolor. Occaecat quis quis aliquip non culpa do ea culpa officia. Aute cillum aliqua voluptate deserunt in id dolor adipisicing amet. In velit velit eiusmod minim duis velit nulla tempor excepteur. Exercitation velit in culpa laboris consectetur sint sint exercitation pariatur aute.

Sunt sunt officia mollit ea et. Consectetur cupidatat enim aute labore do quis incididunt laborum nisi culpa. Dolor amet consequat pariatur anim minim dolor nisi culpa fugiat fugiat veniam voluptate Lorem occaecat.

Occaecat ad non est consectetur ex laborum velit consectetur esse. Est pariatur nostrud esse veniam. Ex incididunt nisi adipisicing amet veniam. Irure adipisicing anim in dolor incididunt ex commodo cupidatat fugiat nisi deserunt. Sit proident commodo Lorem sit mollit esse quis fugiat sint amet irure enim incididunt. Reprehenderit enim ad aute aute.

Ea et nulla incididunt elit laboris commodo ad esse cupidatat ullamco voluptate commodo consequat enim. Anim velit aliquip eiusmod in in qui. Ex ut elit officia excepteur culpa occaecat anim commodo eu enim.`,
      descricao_curta: "Eu fugiat proident voluptate laboris occaecat tempor ut commodo est ad cupidatat elit dolor.",
      categorias_id: 4,
      createdAt: new Date()
    },
    {
      id: 3,
      nome: "Os Ladrões da Tumba de Mal'zaku",
      distribuidor: "Wizards of the Coast Inc.",
      preco: 75000,
      rating: 5,
      img_1: "https://images.unsplash.com/photo-1568882200110-5bed00139d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img_2: "https://images.unsplash.com/photo-1634148340478-6588e1dcd9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHVtYmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      img_3: "https://images.unsplash.com/photo-1627315463868-43c78ea50852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHVtYmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      img_4: "",
      estoque: 5,
      descricao: `Amet ea adipisicing aute mollit mollit ex est enim dolore adipisicing excepteur excepteur amet. Elit adipisicing cillum minim incididunt cillum dolor aliqua labore aute nostrud ex tempor ad anim. Dolore esse commodo nostrud in proident fugiat non nisi non. Eu proident adipisicing eiusmod veniam ea ut esse tempor officia duis quis duis. Eiusmod do enim qui anim laboris culpa fugiat esse esse.

Enim consectetur ex ipsum amet est ullamco commodo adipisicing exercitation excepteur. Tempor ipsum ad irure pariatur ut consectetur dolor tempor quis proident. Laborum qui sit voluptate amet qui quis. Consectetur veniam sunt eiusmod cillum culpa enim mollit irure enim reprehenderit enim Lorem cillum. Sunt in sunt qui consequat dolore irure eu exercitation dolor ea non.

Dolor sit aliquip incididunt sint qui nulla id cupidatat esse dolor quis ullamco consectetur dolore. Est nostrud nostrud consectetur exercitation esse nulla irure sunt ad reprehenderit duis non fugiat voluptate. Aliquip minim ullamco laboris velit anim reprehenderit est culpa.

Tempor culpa reprehenderit commodo occaecat labore deserunt anim do. Lorem sunt ipsum aliquip sit dolore aute. Excepteur nostrud tempor dolor in aliqua aute proident proident nulla ea culpa qui est. Duis nisi commodo cillum et veniam sit proident Lorem ullamco duis proident laboris aute est. Aliqua consectetur excepteur sunt labore et non sunt ad in officia ex Lorem.

Nulla ad qui dolor eu irure. Ad incididunt minim ullamco officia sit anim consectetur tempor nisi aute. Deserunt qui aliqua commodo laboris culpa cillum ex ut nostrud qui dolore veniam quis. Sint officia incididunt eiusmod incididunt.

Culpa magna non quis elit culpa laboris excepteur pariatur velit magna reprehenderit. Enim velit commodo minim consequat ipsum. Quis labore voluptate ad ad fugiat incididunt occaecat id. Proident labore consequat irure officia.`,
      descricao_curta: "Dolor culpa sint aliqua sunt quis proident est sit aute velit sit magna.",
      categorias_id: 1,
      createdAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
