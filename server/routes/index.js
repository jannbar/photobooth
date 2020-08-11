require('dotenv').config()

const express = require('express')
const router = express.Router()

// START PAGE
router.get('/', (req, res) => {
  res.send('up & running baby!')
})

// COUPLE NAMES
router.get('/couple', (req, res) => {
  res.status(200).json({ couple: `${process.env.GROOM} & ${process.env.BRIDE}` })
})

module.exports = router
