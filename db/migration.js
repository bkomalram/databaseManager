const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('mysql://root:password@localhost:3306/loteriadb')
const sequelize = new Sequelize('mysql://ztechs_bk:12345@ztech-s.com:3306/ztechs_bk')

async function sequelizeGo() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}

sequelizeGo()