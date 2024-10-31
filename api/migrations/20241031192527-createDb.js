'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      favorites: {
        type: Sequelize.JSON,
        allowNull:false
      },
      Sunday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Monday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Tuesday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Wednesday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Thursday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Friday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      Saturday:{
        type: Sequelize.JSON,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};