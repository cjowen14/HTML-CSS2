console.log("Hello World!");

let navVar = document.querySelectorAll(".navigation")
let header = document.querySelector("header");
let messageSection = document.createElement("section");


function notYet(event){
    event.preventDefault();
    messageSection.classList.add("error")
    header.appendChild(messageSection);
    messageSection.textContent = `Sorry, the site is under construction!`;
    revealMessage();
}

function revealMessage(){
    messageSection.classList.remove("hide");
    setTimeout(disappear, 2000);
}

function disappear(){
    messageSection.classList.toggle("hide");
}

for (let i = 0; i < navVar.length; i++){
    navVar[i].addEventListener("click", notYet);
}



