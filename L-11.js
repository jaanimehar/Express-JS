const express = require('express')
const fs = require('fs')

const app = express()

//middleware
app.use((req,res,next)=>{
    console.log("middleware-1");
    req.name="comrade coding school";
    next();

});
app.use((req,res,next)=>{
    console.log("middleware-2", req.name);
    fs.appendFile(
        "filelog.txt",
        `${Date.now()}:${req.method}:${req.path}:${req.ip}\n`,
        (err,data)=>{
            if (err) {
                console.log(err);
                
            }
            else{
                next();
            }
        }
        )
    next();

});
//route
app.get('/home', (req, res) => {
    res.send('Home');
})

app.listen(3000, ()=>{
    console.log("server is run on 3000 port no.")
})