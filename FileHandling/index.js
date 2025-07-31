const fs = require('fs');


// console.log(fs);

// fs.writeFile("./demo.txt", "", function(err){
//     if(err) return console.log(err)
// })
// fs.writeFile("./data.txt", "hi", function(err){
//     if(err) return console.log(err)
// })

//if you want your file should't overrided use appendFIle

// fs.appendFile("./data.txt"," hello world", function(err){
//     if (err) return console.log(err)
// })

//readFile
fs.readFile("./data.txt", "utf-8",function(err,data1){
    if(err) return console.log(err);
        // console.log(data1)
    fs.readFile("./demo.txt","utf-8", function(err,data2){
        if(err) return console.log(err);
            // console.log(data2)

        const filedata = data1+data2

        fs.writeFile("./demo2.txt",filedata,function(err){
            if(err) return console.log(err);
        })
    })
    

})

