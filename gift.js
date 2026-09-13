document.addEventListener("DOMContentLoaded",()=>{

const card=document.getElementById("card");
const open=document.getElementById("openCard");
const hearts=document.getElementById("hearts");

open.addEventListener("click",()=>{

  card.classList.add("open");

  open.disabled=true;

  /*
    Card खुलिसकेपछि
    4 seconds मा next page.
  */

  setTimeout(()=>{

    window.location.href="memory.html";

  },4000);

});


function createHeart(){

  const h=document.createElement("div");

  h.className="floatHeart";

  h.textContent=
    Math.random()>.5 ? "❤️" : "♡";

  h.style.left=
    Math.random()*100+"%";

  h.style.fontSize=
    15+Math.random()*20+"px";

  h.style.color=
    "#ff75b8";

  hearts.appendChild(h);

  setTimeout(()=>{
    h.remove();
  },7000);

}

setInterval(createHeart,650);

});