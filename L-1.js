const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home');
})
app.get('/login', (req, res) => {
    console.log(req.query.name);
    res.send('login');
})
app.get('/aboutus', (req, res) => {
    res.send('About us');
})

app.listen(8000)