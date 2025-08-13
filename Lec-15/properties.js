/*
getAttribute
setAttribute
classList
*/

let h1= document.querySelector("h1");
console.log(h1.classList);
h1.classList.add("hi");
h1.classList.add("hello");
h1.classList.remove("hello");

h1.classList.toggle("hello");
h1.classList.remove("hello");
console.log(h1.classList.contains("hometitle"));
