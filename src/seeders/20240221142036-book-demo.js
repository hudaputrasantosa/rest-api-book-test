"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("books", [
      {
        code: "BK-23",
        title: "Bulan Ksatria",
        author: "Doe",
        year: "2018",
        stock: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "HP-12",
        title: "Harry Potter",
        author: "John",
        year: "2019",
        stock: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "BP-13",
        title: "Bulan Purnama",
        author: "Donny",
        year: "2010",
        stock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "BS-05",
        title: "Bicara Itu ada Seninya",
        author: "Oh Su Hyang",
        year: "2008",
        stock: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "BL-02",
        title: "Bicara Lembut",
        author: "Dodi",
        year: "2020",
        stock: 4,
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
