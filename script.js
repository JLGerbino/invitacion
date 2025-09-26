
// Carrusel
let index = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}, 3000);

// Control de música
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
let playing = false;

musicBtn.addEventListener("click", () => {
    if (playing) {
        music.pause();
        musicBtn.textContent = "🎵";
        musicBtn.classList.remove("playing"); // quita animación
    } else {
        music.play();
        musicBtn.textContent = "⏸";
        musicBtn.classList.add("playing"); // agrega animación
    }
    playing = !playing;
});


// Función para actualizar con efecto flip
function updateFlip(id, newValue) {
    const el = document.getElementById(id);
    const formattedValue = String(newValue).padStart(2, "0"); // Siempre con 2 dígitos

    if (el.innerText !== formattedValue) {
        el.classList.remove("animate");
        void el.offsetWidth; // ⚡ reinicia la animación
        el.innerText = formattedValue;
        el.classList.add("animate");
    }
}

// Cuenta regresiva
const targetDate = new Date("2025-11-23T21:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = '<h1 class="mensaje-fiesta">A disfrutar la fiesta!</h1>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateFlip("days", days);
    updateFlip("hours", hours);
    updateFlip("minutes", minutes);
    updateFlip("seconds", seconds);
}, 1000);

function abrirDialogo(id) {
  document.getElementById(id).showModal();
}

function cerrarDialogo(id) {
  document.getElementById(id).close();
}

/*animacion fiesta*/
lottie.loadAnimation({
  container: document.getElementById('iconFiesta'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/250fc3f4-bc3e-4a6d-8328-26ef9a8d34b8/b2yyeGQj7o.json'
});

/*animacion lugar*/
lottie.loadAnimation({
  container: document.getElementById('iconLugar'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/7cccf2fc-84a6-4a8b-a6cb-9d321b2d5e0d/m7lbhhQe1D.json'
});

/*animacion ubicacion*/
lottie.loadAnimation({
  container: document.getElementById('iconDireccion'),
  renderer: 'svg',
  loop: true,
  autoplay: true,  
  /*path: 'https://lottie.host/89324d9e-3eaf-4a38-b244-19cda3c6a391/2zjsRjvUwl.json'*/
});
//Manejo del formulario
const form = document.getElementById("miFormulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const datos = new FormData(form);

  const respuesta = await fetch(form.action, {
    method: form.method,
    body: datos,
    headers: { 'Accept': 'application/json' }
  });

  if (respuesta.ok) {
    form.reset(); 
    mensaje.style.display = "block"; 
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);
  } else {
    alert("Hubo un error al enviar. Intenta de nuevo.");
  }
});

