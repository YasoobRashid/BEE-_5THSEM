const form = document.querySelector(".addtoform");
const titleInput = document.querySelector(".Todotitle");
const body = document.querySelector("body");
console.log(form);

form.addEventListener("click",(event)=>{
    event.preventDefault();
    let title = titleInput.value;
    console.log(title);
    form.reset();
})

body.addEventListener("click",(ev)=>{
    console.log(ev.target);
    let className = ev.target.classList;
    if(className.contains("submit")){
        console.log(ev.target.parentElement.remove());
    }
})