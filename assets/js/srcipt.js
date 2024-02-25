"use strict"


let addname = document.querySelector(".addname");
let addEmail = document.querySelector(".addEmail");
let btn = document.querySelector("button");
let error = document.querySelector(".error")
let result = document.querySelector(".result")



btn.addEventListener("click",function(){
    let name = addname.value;
    let email = addEmail.value;
    if(name.trim()==""|| email.trim()==""){
        document.querySelector(".error").classList.remove("d-none")
    }else{
        document.querySelector(".error").classList.add("d-none");
    }

   let text = document.createElement("new");
    text.innerHTML = "<p>Name:" +name + "</p> <p>Email:" +email+"</p>";
    result.append(text)
    addname.value = "";
    addEmail.value = "";

 

})