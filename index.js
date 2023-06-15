const express = require('express')
const cors = require('cors')
const dogRoutes = require('./routes/routes')
const { handleErrors, handleTimeout } = require('./middlewares/errorMiddleware')
const seedDatabase = require('./seedDatabase/seeds')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', dogRoutes)
app.use(handleTimeout)
app.use(handleErrors)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
seedDatabase()
