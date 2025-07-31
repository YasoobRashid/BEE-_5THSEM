const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true})); // it parse form data form urlencoded data into object

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.post("/users", (req, res) => {
   
    // const jsonData = JSON.stringify(formData,null,2); 
    let username = req.body.username
    let password = req.body.password
    let user = {
        username:username,
        password:password
    }

    let alluser=[];
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err) return res.send(err);
        if(data){
            alluser =  JSON.parse(data);
        }
        alluser.push(user);

        fs.writeFile("./user.json", JSON.stringify(alluser,null,2),(err)=>{
            if(err) return res.send(err);
            res.send("data saved");
        })
    });
});


app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})