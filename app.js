let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 
let input = document.querySelector("input");


btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
})