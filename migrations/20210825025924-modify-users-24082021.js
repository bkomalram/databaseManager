'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.renameColumn('users','lastname','lastName')
        await queryInterface.renameColumn('users','dni','DNI')
        await queryInterface.renameColumn('users','username','userName')
        await queryInterface.addColumn(
          'users',
          'email',
          {
            type: Sequelize.DataTypes.STRING,
          },
          { transaction }
        );
        
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     const transaction = await queryInterface.sequelize.transaction();
     try {
        await queryInterface.renameColumn('users','lastName','lastname')
        await queryInterface.renameColumn('users','DNI','dni')
        await queryInterface.renameColumn('users','userName','username')
        await queryInterface.removeColumn('users', 'email', { transaction });        

       await transaction.commit();
     } catch (err) {
       await transaction.rollback();
       throw err;
     }
  }
};
