const audio = document.getElementById('backgroundAudio');
const audioControl = document.getElementById('audioControl');
let isAudioPlaying = true;

audioControl.addEventListener('click', () => {
  if (isAudioPlaying) {
    audio.pause();
    isAudioPlaying = false;
    audioControl.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    audio.play();
    isAudioPlaying = true;
    audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

// Escuchar eventos de teclado
document.addEventListener('keydown', function (event) {
  // Evitar el comportamiento predeterminado de la tecla si es la flecha arriba o abajo
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();

    // Llamar a la función correspondiente
    if (event.key === 'ArrowUp') {
      tetrimino.girar();
    } else if (event.key === 'ArrowDown') {
      tetrimino.moverAbajo(); // Llama a tu función para mover hacia abajo rápidamente
    }
  }
});

let touchStartX = 0;
let touchStartY = 0;

// Escuchar eventos táctiles
document.addEventListener('touchstart', function (event) {
  // Guardar las coordenadas iniciales del toque
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

// let touchStartX = 0;
// let touchStartY = 0;
let ultimoClick = 0;
let tiempoDobleClic = 500; // Ajusta este valor según tus preferencias

// Escuchar eventos táctiles de liberación
document.addEventListener('touchend', function (event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado de la tecla si es la flecha arriba o abajo

  // Obtén el tiempo actual
  let tiempoActual = new Date().getTime();

  // Verifica si ha pasado el tiempo suficiente desde el último clic
  if (tiempoActual - ultimoClick <= tiempoDobleClic) {
    // Es un doble clic, llama a la función para girar el tetrimino
    tetrimino.girar();
  } else {
    // Es un clic sencillo, evita el desplazamiento de la pantalla
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    const threshold = 30;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > threshold) {
        tetrimino.moverDerecha();
      } else if (deltaX < -threshold) {
        tetrimino.moverIzquierda();
      }
    } else {
      if (deltaY > threshold) {
        tetrimino.moverAbajo();
      }
    }
  }

  // Actualiza el tiempo del último clic
  ultimoClick = tiempoActual;
});



let juegoPausado = false;

function togglePausa() {
  console.log("Toggle pausa"); // Agregar un mensaje de consola para verificar
  juegoPausado = !juegoPausado;

  if (juegoPausado) {
    // noLoop(); // Pausar el juego
    document.getElementById('pausaControl').style.display = 'none';
    document.getElementById('playControl').style.display = 'block'; // Muestra el botón "Play"
  } else {
    // loop(); // Reanudar el juego
    document.getElementById('pausaControl').style.display = 'block';
    document.getElementById('playControl').style.display = 'none'; // Oculta el botón "Play"
  }
}

document.getElementById('pausaControl').addEventListener('click', togglePausa);
document.getElementById('playControl').style.display = 'block'; // Muestra el botón "Play"
document.getElementById('playControl').addEventListener('click', togglePausa);
document.getElementById('playControl').style.display = 'none'; // Oculta el botón "Play"
