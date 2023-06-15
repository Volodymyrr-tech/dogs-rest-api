const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogController')
const pingController = require('../controllers/pingController')

router.get('/ping', pingController.ping)
router.get('/dogs', dogController.getDogs)
router.post('/dog', dogController.createDog)
router.post('/dogs/batch', dogController.createDogs)

module.exports = router
