'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'brandId', {
      type: Sequelize.INTEGER,
      references: {
      model: 'brands', // ejemplo: brands
      key: 'id', // atributo en la tabla al que hacemos referencia
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'brandId');
  }
};
