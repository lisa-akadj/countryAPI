const express = require('express')
const cors = require('cors')
const logger = require('./logger')

const countryRouter = require('./routers/countries')

const app = express()
app.use(cors())
app.use(logger)
app.use(express.json())

app.use('/countries', countryRouter)

app.get('/', (req, res) => { 
    res.send('You alright babes x')  
}) 

module.exports = app