const express = require('express')


const noteController = require('../controllers/noteControllers')

const router = express.Router()


router.post('/', noteController.createItem)
router.get('/', noteController.getNotes)

module.exports = router;