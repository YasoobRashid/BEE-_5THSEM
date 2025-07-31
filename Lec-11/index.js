const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello how are you')
})

app.get("/users",(req,res)=>{
    res.send("this is users page")
})

app.get('/blogs',(req,res)=>{
    res.send("<div><h1>First blog</h1><p>hasdagbjdhajdgaudgadbasjhkb</p></div> ");
})

app.get("/html",(req,res)=>{
    // console.log();
    // res.sendFile(__dirname+"/index.html")
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/allusers",(req,res)=>{
    // console.log();
    // res.sendFile(__dirname+"/index.html")
    let allusers = [{id:1,name:"Yasoob"},{id:2,name:"rhythm"}];
    res.json(allusers);
})

//path variable
//query parameter
app.get("/profile",(req,res)=>{ //using : makes it use  params
    let pathvariable_id = req.query.id;
    let pathvariable_name = req.query.name;

    res.send("Profile of ID "+pathvariable_id+" "+pathvariable_name)

})

//params

app.get("/profile/:id/name/:username",(req,res)=>{ //using : makes it use  params
    let id = req.params.id;
    let username= req.params.username;

    res.send("Your profile id is: "+id+" "+username);

})



app.listen(3000,()=>{
    console.log("Running" )
})