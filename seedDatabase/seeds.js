const sequelize = require('../database/db')
const Dog = require('../models/dog')

async function seedDatabase() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    await sequelize.sync({ force: false })

    const dogsExist = (await Dog.count()) > 0

    if (!dogsExist) {
      const neo = await Dog.create({
        name: 'Neo',
        color: 'red & amber',
        tail_length: 22,
        weight: 32,
      })
      console.log(neo.toJSON())

      const jessy = await Dog.create({
        name: 'Jessy',
        color: 'black & white',
        tail_length: 7,
        weight: 14,
      })
      console.log(jessy.toJSON())
    }
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

module.exports = seedDatabase
