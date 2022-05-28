

module.exports = {
  async up (queryInterface, Sequelize) {    
     
     await queryInterface.bulkInsert('posts_mesas', [
    {
      id: 1,
      pinned: 0,
      status: 2,
      post: `Cillum esse ullamco incididunt id nulla. Ad reprehenderit nulla sit cupidatat ad ea magna. Duis occaecat labore ut nisi irure aliqua enim. Laborum do irure enim nulla velit duis officia dolor proident do et et veniam sunt. Dolor exercitation aliquip tempor aliquip sint aliqua sit enim. Elit commodo officia irure ipsum magna deserunt tempor ullamco. Cupidatat irure sunt incididunt deserunt velit culpa deserunt.
        Ut sunt id enim nisi laborum nulla eiusmod voluptate ad id cillum voluptate aliqua quis. Nostrud Lorem anim sit do voluptate aliquip et cupidatat id anim magna minim cupidatat esse. Incididunt veniam eiusmod commodo nulla elit nisi esse adipisicing id sit Lorem commodo nisi. Ut cupidatat anim amet irure commodo labore deserunt reprehenderit. Est duis non pariatur pariatur velit voluptate tempor elit laborum non dolor in amet laboris.
        Dolore irure eu minim veniam commodo occaecat cupidatat veniam fugiat ut. Ea laborum et ullamco est ea laborum aute. Laboris dolore magna sunt quis reprehenderit duis do aliqua ad.`,
      mesas_id: 3,
      usuarios_id: 2,
      createdAt: new Date()
    },
    {
      id: 2,
      pinned: 1,
      status: 1,
      post: `Fugiat dolore pariatur amet ut adipisicing pariatur labore adipisicing ex reprehenderit. Veniam ullamco adipisicing occaecat duis Lorem exercitation ullamco minim exercitation dolore eiusmod incididunt sunt. Qui sunt commodo duis amet nulla ad ullamco est minim ut nisi consectetur. Minim pariatur nostrud id sint tempor amet consequat reprehenderit velit cillum. Do deserunt anim duis labore commodo nisi magna consequat occaecat incididunt eiusmod qui.
        Sunt commodo laboris anim amet magna incididunt. In velit ea ullamco ipsum culpa culpa reprehenderit cillum proident tempor commodo. Laboris laboris sunt nostrud laborum proident Lorem. Ex cillum dolor incididunt magna officia consectetur et adipisicing excepteur sit minim labore occaecat amet. Labore sunt sunt et veniam. Id enim quis sint ullamco proident eiusmod excepteur. Sit consequat ea tempor duis.
        Sint in minim aliquip amet culpa aliquip voluptate do do reprehenderit consequat. Enim enim dolore ullamco veniam ad mollit. Esse incididunt duis consequat fugiat culpa aute laboris ea. Laboris Lorem deserunt eu exercitation id. Duis minim anim sit esse ullamco.`,
      mesas_id: 1,
      usuarios_id: 3,
      createdAt: new Date()
    },
    {
      id: 3,
      pinned: 0,
      status: 2,
      post: `Deserunt velit aliqua velit occaecat ullamco eu cupidatat aliquip occaecat Lorem proident. Aute proident ullamco reprehenderit duis adipisicing aute laboris eu exercitation. In sunt in enim nulla magna laborum minim reprehenderit ad sint reprehenderit sit do.
        Tempor laboris cupidatat ut irure ipsum culpa et eu ea adipisicing aute duis. Anim aute mollit cupidatat irure qui laborum ullamco duis aliqua. Aute dolore sit amet nostrud minim cupidatat reprehenderit sint veniam ipsum.
        Nulla sint esse exercitation exercitation dolor. Anim consectetur exercitation aliqua Lorem in ad cillum commodo exercitation sunt ex tempor. Dolore fugiat elit dolor dolore ex aute aliqua ipsum ipsum laborum pariatur eu esse.`,
      mesas_id: 2,
      usuarios_id: 1,
      createdAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('posts_mesas', null, {});
     
  }
};
