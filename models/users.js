const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://'+process.env.USER+':'+process.env.PASSWORD+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DATABASE)

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

User.sync()