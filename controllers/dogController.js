const Dog = require('../models/dog')

exports.getDogs = async (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 10
  let pageNumber = parseInt(req.query.pageNumber) || 1
  let attribute = req.query.attribute || 'name'
  let order = req.query.order || 'ASC'

  const validAttributes = [
    'id',
    'name',
    'color',
    'tail_length',
    'weight',
    'createdAt',
    'updatedAt',
  ]

  if (!validAttributes.includes(attribute)) {
    return res.status(400).json({ error: 'Invalid attribute for sorting' })
  }

  const startIndex = (pageNumber - 1) * pageSize

  try {
    const dogs = await Dog.findAll({
      offset: startIndex,
      limit: pageSize,
      order: [[attribute, order]],
    })
    res.json(dogs)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: error.message || 'An unexpected error occurred' })
  }
}

//to handle json array of dogs
exports.createDogs = async (req, res) => {
  const dogs = req.body
  const createdDogs = []

  for (const dog of dogs) {
    try {
      const existingDog = await Dog.findOne({ where: { name: dog.name } })
      if (existingDog) {
        console.error('A dog with this name already exists')
        continue
      }

      const createdDog = await Dog.create(dog)
      createdDogs.push(createdDog)
    } catch (err) {
      console.error(`Failed to create dog: ${err}`)
    }
  }

  if (createdDogs.length > 0) {
    res.status(201).json(createdDogs)
  } else {
    res.status(500).json({ error: 'Failed to create dogs' })
  }
}

exports.createDog = async (req, res) => {
  try {
    const existingDog = await Dog.findOne({ where: { name: req.body.name } })
    if (existingDog) {
      return res
        .status(400)
        .json({ error: 'A dog with this name already exists' })
    }

    const dog = await Dog.create(req.body)
    res.json(dog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
