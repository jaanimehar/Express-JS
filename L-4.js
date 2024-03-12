const express=require("express");
const path=require("path");

const app=express();
// for multiple 
// const public_path=path.join(__dirname, "public");
// app.use(express.static(public_path));
// for single file.
app.use(express.static('/style.css'));
app.get('/',(req, res)=>{
    res.sendFile(__dirname + `/home.html`);

});


app.listen(8000);