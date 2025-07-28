const fs = require('fs');

let users =[{
    id:1,
    name:"Yasoob",
    email:"yasoob080@gmail.com",
    address:"harwan",
    password:"12345"
},
{
    id:2,
    name:"Rhythm",
    email:"Rhythm080@gmail.com",
    address:"talab tilo",
    password:"12345rh"
},
]

const jsonString = JSON.stringify(users,null,2);

fs.writeFile("./users.txt",jsonString,function(err){
    if(err) return console.log(err);
})

