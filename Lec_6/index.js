function starter(cb){
    console.log("Starter ordered")
    setTimeout(()=>{
        console.log("Starter served")
        cb()
    },1000)
}

function maincourse(cb){
    console.log("Main Course ordered")
    setTimeout(()=>{
        console.log("Main course served")
        cb()
    },3000)
}

function sweets(cb){
    console.log("Sweets ordered")
    setTimeout(()=>{
        console.log("Sweets served")
        cb()
    },500)
}

function bill(cb){
    console.log("Your bill is")
    setTimeout(()=>{
        console.log("Bill payed")
        cb()
    },20)
}


// starter-->main course--> sweets --> bill

// starter(function(){
//     maincourse(function(){
//         sweets(function(){
//             bill(function(){})
//         })
//     })
// })

//starter-->sweets-->maincourse-->bill
starter(function(){
    sweets(function(){
        maincourse(function(){
            bill(function(){
                console.log("ghr chalte hai")
            })
        })
    })
})