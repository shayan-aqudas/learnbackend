require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.send('kya baat hai guys')
})

app.get('/twitter', (req, res) => {
    res.send('your twitter account has been created')
})

app.get('/login', (req, res) => {
    res.send('<h1> PLEASE LOGIN AT OUR WEBSITE <h1>');
})

app.get('/fun', (req, res) => {
    res.send('<h2>SHAYAN AQUDAS<h2>');
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
