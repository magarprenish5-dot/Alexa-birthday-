document.addEventListener("DOMContentLoaded",()=>{

const cards=
document.querySelectorAll(".storyCard");

const dots=
document.querySelectorAll(".dots i");

const next=
document.getElementById("next");

const final=
document.getElementById("final");

const open=
document.getElementById("open");

let current=0;

next.addEventListener("click",()=>{

cards[current].classList.remove("active");
dots[current].classList.remove("active");

current++;

if(current>=cards.length){

final.classList.add("show");

return;

}

cards[current].classList.add("active");
dots[current].classList.add("active");

if(current===2){

next.textContent=
"FINAL SURPRISE ❤️";

}

});

open.addEventListener("click",()=>{

window.location.href="final.html";

});

});