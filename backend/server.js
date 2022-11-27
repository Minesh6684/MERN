const express = require('express')
const errorHandler = require('./middlewares/donationMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const colors = require('colors')
PORT = process.env.PORT || 5002

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/users', require('./routes/userRoutes'))
app.use('/donations', require('./routes/donationRoutes'))

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))