/*
inserting a new element on dom using  js 

1. create a new element for example "li" using createElement function 
2. insert content in that element either innerText or innerHTML 
3. insert that element in parent container using appendChild function 
*/
let ul = document.querySelector("ul");
// function addToDo(){
//     let li = document.createElement("li");
//     li.innerHTML = `Todo 4
//                     <button>❌<button/>`;

//     ul.appendChild(li)
// }

// let todo={
//     id:"1",
//     title:"study at 8pm",
//     status:"pending"
// }

let todos =[
    {
    id:"1",
    title:"watch tv and relax",
    status:"pending"
    },
    {
    id:"2",
    title:"study at 8pm",
    status:"pending"
    },
    {
    id:"3",
    title:"sleep at 10",
    status:"pending"
    }
]

let form = document.querySelector(".addform");
let titleInput = document.querySelector(".titleinput");
let submitbtn = document.querySelector("#submitbtn");

submitbtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    let title = titleInput.value;

    let newTodo = {
        id: Math.floor(Math.random()*1000000), 
        title: title,
        status: "pending"
    }

    todos.push(newTodo);
    console.log(todos)       
    addToDo(newTodo);          
    form.reset();   
});




function showalltodos(todos){
    todos.forEach(todo => {
        addToDo(todo);
    });
}



function addToDo(todo){
    let li = document.createElement("li");
    li.innerHTML = `${todo.title}
                    <button>❌</button>`

    ul.appendChild(li)
    // ul.prepend(li) to add at above
}

// addToDo(todo);      

showalltodos(todos);