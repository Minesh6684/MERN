const express = require('express')
const dotenv = require('dotenv').config()
PORT = process.env.PORT || 5001

const app = express()

app.use('donations', require())

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))