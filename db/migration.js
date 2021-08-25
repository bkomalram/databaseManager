
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://'+process.env.USER+':'+process.env.PASSWORD+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DATABASE)

async function sequelizeGo() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}

sequelizeGo()