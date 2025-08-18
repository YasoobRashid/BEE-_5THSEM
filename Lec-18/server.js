const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));



app.post("/todos", (req,res)=>{
    let title = req.body.title;
    console.log(title);
    res.json({
        success: true,
        message: "todo added"
    })
})

app.listen(3000,()=>{
    console.log("server started");
})