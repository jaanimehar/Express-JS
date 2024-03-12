const express=require("express");
const path=require("path");

const app=express();
// for multiple 
// const public_path=path.join(__dirname, "public");
// app.use(express.static(public_path));
app.get("/home",(req, res)=>{
    res.sendFile(`${public_path}/home.html`);

});
app.get("/about",(req, res)=>{
    res.sendFile(`${public_path}/about.html`);

});
app.get("*",(req, res)=>{
    res.sendFile(`${public_path}/error.html`);

});

console.log("Server is run.")
app.listen(8000);