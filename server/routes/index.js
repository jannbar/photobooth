const express = require('express')
const router = express.Router()

// START PAGE
router.get('/', (req, res) => {
  res.send('up & running baby!')
})

// LATEST PICTURE
router.get('/latest', (req, res) => {
  res
    .status(200)
    .send(
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    )
})

module.exports = router
