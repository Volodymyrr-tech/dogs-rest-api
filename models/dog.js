const Sequelize = require('sequelize')
const sequelize = require('../database/db') // import the db connection

const Dog = sequelize.define('Dog', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tail_length: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: 0,
    },
    allowNull: false,
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Dog
