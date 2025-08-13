//accessing dom element 
//1.by Id

// let el1 = document.getElementById("hometitle");
// console.log(el1);

// //2. by class name 
// let el2 = document.getElementsByClassName("useritems"); 
// console.log(el2[2]);

// let el3 = document.getElementsByClassName("user-desc");
// console.log(el3);

// //2. by tag
// let el4 = document.getElementsByTagName("p");
// console.log(el4);

//querySelector(universal element selector)
let el5 = document.querySelector("#hometitle"); // # for to let him know that you are selecting by id
console.log(el5);

let el6= document.querySelector(".useritems");
console.log(el6);

let el7= document.querySelectorAll(".useritems");
console.log(el7);

let el8 = document.querySelector("p");
console.log(el8); 

let userlist = document.querySelector(".user-list")

//properties
//1.innerText
//2.innerHtml
//3.textContent

//getter
let content = el8.innerText;
console.log(content);

//setter
el8.innerText ="set using javascript";

let userlistcontent = userlist.innerHTML;
console.log(userlistcontent);

userlist.innerHTML = `<li>User one</li>
                      <li>User two</li>`