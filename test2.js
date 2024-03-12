const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000
// middleware
app.use((req, res, next) => {
    console.log("middleware 1");
    // res.end("Hello");
    next();
});
app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
        `${Date.now()}:${req.ip}:${req.method}:${req.path}\n`,
        (err, data) => {
            if (err) {
                console.log(err);
                
            }
            else{
            next();
        } 
        }
    );
    console.log("middleware 2");
    // res.end("Hello");
    // next();
});
app.get("/home", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Server is run on port no:${port}`)
});
