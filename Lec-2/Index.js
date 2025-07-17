const { Console } = require("console");
const fs = require("fs");
console.log("Start");

setImmediate(()=>{
    console.log("Immediate 1");
})

setTimeout(()=>{
    console.log("Timeout 1");
},0)

fs.readFile("./demo.txt","utf-8",(err,data)=>{
    if(err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
    setTimeout(()=>{
        console.log("Timeout 2");
    })

    setImmediate(()=>{
        console.log("Immediate 2");
    })

    process.nextTick(()=>{
        console.log("Next Tick 2");
    })
})

function fun(){
    console.log("Fun")
}

fun();

console.log("End");

function mul(a,b){
    return new Promise ((resolve,reject)=>{
        if (a>10){
            setTimeout(()=>{
                resolve(a*b);
            })
            
        }
        else{
            reject("a is less than 10");
        }
    })
}

mul(11,6).then((data)=>{
    console.log(data);
})

.catch((err)=>{
    console.log(err);
})

process.nextTick(()=>{ // high priority than promise queue in microtask queue
    console.log("Next Tick 1");
})