const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Home</h1>");
    // res.send("Home");

})
app.get('/login', (req, res) => {
    res.send(`
    
    <form action="action_page.php" method="post">
    <div class="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>
  
    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
  
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  
    <div class="container" style="background-color:#f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
    
    `);
})
app.get('/aboutus', (req, res) => {
    res.send(`
    {
        name:"mehar",
        DOB: 1990,
        City:"Delhi"
    }
    `);
})
app.listen(8000)