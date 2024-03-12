const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("The client side request is send=",req.query.name);
    res.send('comradecodingschool');
    // req.send("");
})
app.get('/login', (req, res) => {
    res.send('login');
})
app.get('/aboutus', (req, res) => {
    res.send('about us');
})

app.listen(8000)