'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.addConstraint('UsersRoles', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'fkey_constraint_user_ur',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('UsersRoles', {
        fields: ['role_id'],
        type: 'foreign key',
        name: 'fkey_constraint_role_ur',
        references: { //Required field
          table: 'Roles',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('UsersRoles', 'fkey_constraint_user_ur');
     await queryInterface.removeConstraint('UsersRoles', 'fkey_constraint_role_ur');
  }
};
