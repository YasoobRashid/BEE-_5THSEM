let p = new Promise((resolve,reject)=>{
    let age = 10
    if(age>18){
        resolve("You're eligible to vote")
    }
    else{
        reject("You are underage")
    }
})
// p.then(
//     function(data){
//         console.log("first");
//         console.log(data);
//     },
//     function(err){
//         console.log("second");
//         console.log(err);
//     }
// )
console.log(p);

p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("start");
console.log("end");