"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("items", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      use_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hours_or_minutes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      potency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_consume: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("items");
  },
};
