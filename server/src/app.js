const express = require('express')
const bodyPraser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use (morgan('combine'))
app.use(bodyPraser.json())
app.use(cors())

app.post('/register', (req, res)=>{
    res.send({
        message: `Hello ${req.body.email}! Your user was registerd` 
    })
})

app.listen(process.env.PORT || 8081)