let products = [
    {
        id:1,
        name:"Iphone 16",
        price:100000
    },
    {
        id:2,
        name:"Samsung",
        price:80000
    }
]

function buyProduct(name,cb){
    for(let i=0; i<products.length;i++){
        if(products[i].name==name){
            return cb(null,products[i].price)
        }
    }
    cb("No product found", null)
}
let balance = 100000;
function pay(amount, cb){
    if(balance>=amount){
        balance -= amount;
        cb (null,"Payed bill and available balance is: "+ balance)
    }
    else{
        cb("not enough money",null)

    }
}

buyProduct("Iphone 16", function(err,data){
    if(err){
        return console.log(err);
        
    }
    console.log(data)

    pay(data, function(err,data){
        if(err){
            return console.log(err)
        }
        console.log(data);
    })
})