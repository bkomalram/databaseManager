const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('mysql://ztechs_bk:12345@ztech-s.com:3306/ztechs_bk')
const sequelize = new Sequelize('mysql://root:password@localhost:3306/loteriadb')

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