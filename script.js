document.addEventListener("DOMContentLoaded", () => {

  const start = document.getElementById("start");
  const counter = document.getElementById("counter");
  const title = document.getElementById("title");
  const text = document.getElementById("text");

  const particles = document.getElementById("particles");
  const portal = document.getElementById("portal");
  const explosion = document.getElementById("explosion");
  const lightningFX = document.getElementById("lightningFX");
  const holoMessage = document.getElementById("holoMessage");
  const completion = document.getElementById("completionScreen");


  /* =========================
     START EXPERIENCE
  ========================= */

  start.addEventListener("click", () => {

    start.disabled = true;
    start.style.opacity = "0";
    start.style.pointerEvents = "none";

    title.textContent = "SYSTEM ACTIVATING";
    text.textContent = "INITIALIZING DIGITAL CORE...";

    counterAnimation();
    particleBurst();

    setTimeout(() => {

      title.textContent = "CORE ONLINE";
      text.textContent = "ENERGY DETECTED";

    }, 1000);


    setTimeout(() => {

      openPortal();

    }, 1400);


    setTimeout(() => {

      particleExplosion();

    }, 2800);


    setTimeout(() => {

      lightningReveal();

    }, 3900);


    setTimeout(() => {

      cinematicFinish();

    }, 5000);

  });


  /* =========================
     COUNTER
  ========================= */

  function counterAnimation() {

    let number = 0;

    const timer = setInterval(() => {

      number++;

      counter.textContent =
        String(number).padStart(2, "0");

      if (number >= 99) {

        clearInterval(timer);

      }

    }, 25);

  }


  /* =========================
     SMALL PARTICLE BURST
  ========================= */

  function particleBurst() {

    for (let i = 0; i < 100; i++) {

      const particle =
        document.createElement("div");

      particle.className = "particle";

      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        100 + Math.random() * 450;


      particle.style.setProperty(
        "--x",
        Math.cos(angle) * distance + "px"
      );

      particle.style.setProperty(
        "--y",
        Math.sin(angle) * distance + "px"
      );


      particles.appendChild(particle);


      setTimeout(() => {

        particle.remove();

      }, 1600);

    }

  }


  /* =========================
     PORTAL
  ========================= */

  function openPortal() {

    portal.classList.add("show");

    setTimeout(() => {

      portal.classList.remove("show");

    }, 1200);

  }


  /* =========================
     BIG EXPLOSION
  ========================= */

  function particleExplosion() {

    explosion.innerHTML = "";

    for (let i = 0; i < 130; i++) {

      const particle =
        document.createElement("div");

      particle.className =
        "explosionParticle";


      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        100 + Math.random() * 600;


      particle.style.setProperty(
        "--x",
        Math.cos(angle) * distance + "px"
      );

      particle.style.setProperty(
        "--y",
        Math.sin(angle) * distance + "px"
      );


      explosion.appendChild(particle);

    }


    setTimeout(() => {

      explosion.innerHTML = "";

    }, 1700);

  }


  /* =========================
     LIGHTNING REVEAL
  ========================= */

  function lightningReveal() {

    lightningFX.innerHTML = "";

    for (let i = 0; i < 10; i++) {

      const bolt =
        document.createElement("div");

      bolt.className = "lightning";


      bolt.style.setProperty(
        "--a",
        i * 36 + "deg"
      );


      bolt.style.animationDelay =
        i * 0.05 + "s";


      lightningFX.appendChild(bolt);

    }


    setTimeout(() => {

      holoMessage.classList.add("show");

    }, 300);


    setTimeout(() => {

      lightningFX.innerHTML = "";

    }, 1200);

  }


  /* =========================
     FINAL CINEMATIC SCREEN
  ========================= */

  function cinematicFinish() {

    holoMessage.classList.remove("show");


    title.textContent =
      "SYSTEM COMPLETED";

    text.textContent =
      "EXPERIENCE UNLOCKED";


    completion.classList.add("show");


    /* Automatically go to gift page */

    setTimeout(() => {

      window.location.href =
        "gift.html";

    }, 4000);

  }

});