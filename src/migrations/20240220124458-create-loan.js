"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Loans", {
      code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      id_member: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_book: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      loan_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      return_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      penalty: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Loans");
  },
};
