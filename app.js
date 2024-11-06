let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 
let input = document.querySelector("input");


btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = "";


    let delBtns = document.querySelectorAll(".delete");
    for(delBtn of delBtns){
        delBtn.addEventListener("click", function(){
            let par = this.parentElement;
            par.remove();
        });
    }
});


let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        par.remove();
    });
}