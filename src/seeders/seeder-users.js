"use strict";

module.exports = {
  //add data
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "example@example.com",
        password: "123456", //plaint text - ashdaksdhaksjdha: hash password
        firstName: "John",
        lastName: "Doe",
        address: "USA",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  //undoing ↔ back to old data which havent’t been faulty
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
