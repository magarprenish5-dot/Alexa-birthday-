document.addEventListener("DOMContentLoaded",()=>{

const next=document.getElementById("next");
const hearts=document.getElementById("hearts");

next.addEventListener("click",()=>{

window.location.href="story.html";

});

function createHeart(){

const h=document.createElement("div");

h.textContent=
Math.random()>.5 ? "❤️" : "♡";

h.style.position="absolute";
h.style.left=Math.random()*100+"%";
h.style.bottom="-30px";
h.style.fontSize=
15+Math.random()*20+"px";
h.style.color="#ff75b8";
h.style.animation=
"floatHeart 7s linear forwards";

hearts.appendChild(h);

setTimeout(()=>{
h.remove();
},7000);

}

const style=document.createElement("style");

style.textContent=`

@keyframes floatHeart{

to{

transform:
translateY(-110vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

setInterval(createHeart,700);

});