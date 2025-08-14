let block1 = document.querySelector(".block1");
let block2 = document.querySelector(".block2");
let signup1btn = document.getElementById("signup1");
let signup2btn = document.getElementById("signup2");

block2.style.display = "none";

signup1btn.addEventListener("click", () => {
    block1.style.display = "none";
    block2.style.display = "block";

});

signup2btn.addEventListener("click", () => {
    block2.style.display = "none";
    block1.style.display = "block";
    alert("Form submited");
});