'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('productsCategories', {
      productId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'products', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
      categoryId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'categories', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
			createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productsCategories');
  }
};
