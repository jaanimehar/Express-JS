const express=require("express");
const ejs=require("ejs");
const path=require("path");

const app=express();
const custom_views=path.join(__dirname,"custom_views");
// set view engine
app.set('view engine','ejs');
app.set('views','custom_views');

app.get("/myfile",(req,res)=>{
    const dynamic={
        heading:"now this file is a dynamic.",
        name:"comrade coding school"
    }
    res.render('myprofile',{dynamic});
})
app.listen(5000);