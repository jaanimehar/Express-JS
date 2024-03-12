// access modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// instance variable
const app = express(); 
// access all files path of a public folder.
const public_path = path.join(__dirname, "public");
app.use(express.static(public_path));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
// syntax---app.Http_methods(path,handler)
app.post("/form", (req, res) => {
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));

    // res.send("<p>First name:" +req.body['first_name']+"</P>"+"<p>Last name:" +req.body['last_name']+"</P>")
});
app.put("/form",(req,res)=>{
    const user={
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    console.log(user);
    res.send(JSON.stringify(user));
    

});
app.delete("/form",(req,res)=>{
    const user={
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }   
    console.log(user);
    res.send(JSON.stringify(user));
    

});
app.listen(8000);