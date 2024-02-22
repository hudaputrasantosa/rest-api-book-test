"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("members", [
      {
        name: "Huda Putra Santosa",
        sex: "male",
        address: "Jl. Pancasila",
        phone: "085156765844",
        isPenalty: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nini Kurnia",
        sex: "female",
        address: "Jl. Pancasila",
        phone: "085156876844",
        isPenalty: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
