'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return await queryInterface.bulkInsert("Users",[{
      username:"Necolanch",
      password:"1234",
      favorites:[],
      Sunday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Monday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Tuesday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Wednesday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Thursday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Friday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      Saturday:[{name:"Tricep Extension", difficulty:"beginner", muscle:"triceps", equipment:"dumbbell", "type":"strength"}],
      createdAt: new Date(),
      updatedAt: new Date()
    }], {},
      {
      favorites: {type:new Sequelize.JSON()},
      Sunday: {type:new Sequelize.JSON()},
      Monday: {type:new Sequelize.JSON()},
      Tuesday: {type:new Sequelize.JSON()},
      Wednesday: {type:new Sequelize.JSON()},
      Thursday: {type:new Sequelize.JSON()},
      Friday: {type:new Sequelize.JSON()},
      Saturday: {type:new Sequelize.JSON()},
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
