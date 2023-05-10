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
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      favorites: {
        type: Sequelize.JSON
      },
      Sunday:{
        type: Sequelize.JSON
      },
      Monday:{
        type: Sequelize.JSON
      },
      Tuesday:{
        type: Sequelize.JSON
      },
      Wednesday:{
        type: Sequelize.JSON
      },
      Thursday:{
        type: Sequelize.JSON
      },
      Friday:{
        type: Sequelize.JSON
      },
      Saturday:{
        type: Sequelize.JSON
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