// server
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');

// app.get('/header',(req,res)=>{
//     res.render('header');
// });
// app.get('/content',(req,res)=>{
//     res.render('content');
// });
// app.get('/footer',(req,res)=>{
//     res.render('footer');
// });
app.get('/myfile',(req,res)=>{
    const content={
        body_content:"Content"
    }
    res.render('myfile',{content});
});
app.listen(3000);