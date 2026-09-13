document.addEventListener("DOMContentLoaded",()=>{

const typing=
document.getElementById("typing");

const surprise=
document.getElementById("surprise");

const ending=
document.getElementById("ending");

const hearts=
document.getElementById("hearts");

const photos=
document.querySelectorAll(".photo");


// TYPEWRITER

const message=
"You make ordinary moments feel special.";

let i=0;

function typeWriter(){

if(i<message.length){

typing.textContent+=message[i];

i++;

setTimeout(typeWriter,70);

}

}

setTimeout(typeWriter,800);


// FLOATING HEARTS

function floatingHeart(){

const heart=
document.createElement("div");

heart.className="floatHeart";

heart.textContent=
Math.random()>.5
?"❤️"
:"♡";

heart.style.left=
Math.random()*100+"%";

heart.style.fontSize=
14+Math.random()*25+"px";

heart.style.animationDuration=
5+Math.random()*5+"s";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(floatingHeart,550);


// PHOTO ENTRANCE

photos.forEach((photo,index)=>{

photo.style.opacity="0";

setTimeout(()=>{

photo.style.opacity="1";

if(index===0){

photo.style.transform=
"rotate(-10deg) scale(1)";

}

if(index===1){

photo.style.transform=
"translateX(-50%) rotate(2deg) scale(1)";

}

if(index===2){

photo.style.transform=
"rotate(10deg) scale(1)";

}

},700+index*450);

});


// FINAL SURPRISE

surprise.addEventListener("click",()=>{

surprise.disabled=true;

const flash=
document.createElement("div");

flash.className="flash";

document.body.appendChild(flash);

setTimeout(()=>{
flash.remove();
},700);

document.querySelector("main").style.transition="1s";
document.querySelector("main").style.opacity="0";
document.querySelector("main").style.transform=
"scale(1.08)";

heartExplosion();

setTimeout(()=>{

ending.classList.add("show");

},900);

});


// HEART EXPLOSION

function heartExplosion(){

for(let i=0;i<90;i++){

const heart=
document.createElement("div");

heart.className="burstHeart";

heart.textContent=
Math.random()>.25
?"❤️"
:"✨";

heart.style.left="50%";
heart.style.top="50%";

const angle=
Math.random()*Math.PI*2;

const distance=
80+Math.random()*500;

heart.style.setProperty(
"--x",
Math.cos(angle)*distance+"px"
);

heart.style.setProperty(
"--y",
Math.sin(angle)*distance+"px"
);

heart.style.fontSize=
12+Math.random()*28+"px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1800);

}

}

});