'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('products', 'isAvailable', 'is_available')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('products', 'is_available', 'isAvailable')
  }
};
