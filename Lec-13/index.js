const express = require('express')
const fs = require('fs')
const app = express()
const port = 4444
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));


// app.get('/', (req, res) => {
//   res.sendFile(__dirname+"/index.html");
// })

// app.get('/about.html',(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })

app.post("/register",(req,res)=>{
    const name = req.body.name;
    const password = req.body.password
    let user = {
        name:name,
        password:password
    }

    let allusers = [];
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        if(data){
            allusers = JSON.parse(data);
        }
        allusers.push(user);
        
        fs.writeFile("./user.json", JSON.stringify(allusers,null,2),(err)=>{
            if(err) return res.send(err);
            res.send("data saved");
        })
    })
})


app.listen(port, () => {
  console.log(`running on port ${port}`)
})
