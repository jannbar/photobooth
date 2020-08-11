// IMPORTS
const express = require('express')
const cors = require('cors')

// CONFIG
require('dotenv').config()
const app = express()
app.use(cors())
const PORT = process.env.PORT

// ROUTES
const routes = require('./routes')
app.use('/api', routes)

// START SERVER
app.listen(PORT, () => {
  console.log(`🦕 Photobooth server is listening on port ${PORT}`)
})
