var express = require('express');  
var path = require('path');  

var app = express();  
var bodyParser = require('body-parser');  
const public_path=path.join(__dirname, "public");

app.use(bodyParser.urlencoded({ extended:false }) ); 
app.use(express.static(public_path)); 

// app.get("/form",(req, res)=>{
//    res.sendFile(`${public_path}/form.html`);

// }); 
app.post('/form',function (req, res) {  
    
  const response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
});

app.listen(8000);