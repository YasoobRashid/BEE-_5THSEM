let todoform = document.querySelector("#todoform");
let todotitle =document.querySelector(".todo-title");

todoform.addEventListener("submit",async (ev)=>{
    ev.preventDefault();
    let data = {
        title: todotitle.value
    }
    let serverData = await sendPostReq("/todos", data)
    if(serverData.success){
        alert(serverData.message);
    }
    else{
        alert("something went worng")
    }
    todoform.reset();
})

async function sendPostReq(endpoint, data){
    let response = await fetch("/todos",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "content-type":"application/json"
        }
    })

    return await response.json();
}