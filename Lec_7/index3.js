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

buyProduct("Iphone 16")
    .then((price) => {
        console.log("Product price:", price);
        return pay(price);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    });