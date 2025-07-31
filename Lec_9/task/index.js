const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile("../userdata.json","utf-8",function(err,data1){
    if(err) return console.log(err);
    fs.readFile("../userdata2.json","utf-8",function(err,data2){
        if(err) return console.log(err);

        const users1 = JSON.parse(data1);
        const users2 = JSON.parse(data2);
        // console.log(...users1)

        //you 
        const combineData = [...users1,...users2];

        // const users= JSON.parse(data);
        // console.log(users);

        
        
        fs.writeFile("./users.json",JSON.stringify(combineData,null,2),function(err){
            if(err) return console.log(err);
            console.log("file written")
        })
    
    })
})



//synchronous data 
// let data1= fs.readFileSync("../userdata.json","utf-8");
// // console.log (data1);
// let data2 = fs.readFileSync("../userdata2.json","utf-8");

// let user1 = JSON.parse(data1);
// let user2 = JSON.parse(data2);

// let users = [...user1,...user2];

// fs.writeFileSync("./Syncusers.json",JSON.stringify(users));
// try {   
//     fs.writeFileSync("./Syncusers.json",JSON.stringify(users,null,2));
//     console.log("file written")
    
// } catch (error) {
//     console.log(error);
// }


console.log("hi");