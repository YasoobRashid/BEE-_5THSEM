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
];

function buyProduct(name){
    return new Promise((resolve, reject) => {
        for(let i = 0; i < products.length; i++){
            if(products[i].name === name){
                return resolve(products[i].price);
            }
        }
        reject("No product found");
    });
}

let balance = 100000;

function pay(amount){
    return new Promise((resolve, reject) => {
        if(balance >= amount){
            balance -= amount;
            resolve("Payed bill and available balance is: " + balance);
        } else {
            reject("Not enough money");
        }
    });
}

async function purchase() {
    try{
        let amount = await buyProduct("Samsung");
        let message = await pay(amount);
        console.log(message);
    } catch(error){
        console.log(error)
    }
    
    // return message;
}

let re = purchase();
console.log(re);

console.log ("Hello world")


