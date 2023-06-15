const Sequelize = require('sequelize')

const handleErrors = (err, req, res, next) => {
  console.error(err.stack)

  if (err instanceof Sequelize.ConnectionError) {
    return res.status(500).send('Database connection error!')
  }

  if (err instanceof Sequelize.ValidationError) {
    return res.status(400).send('Validation error!')
  }

  res.status(500).send('Something broke!')
}

const handleTimeout = (req, res, next) => {
  res.setTimeout(7000, function () {
    console.log('Request has timed out.')
    res.status(408).send('Request has timed out.')
  })
  next()
}

module.exports = { handleErrors, handleTimeout }
