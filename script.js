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

// Escuchar eventos de teclado y táctiles
document.addEventListener('keydown', function(event) {
    handleKeyPress(event.key);
  });
  
  // Escuchar eventos táctiles
  document.addEventListener('touchstart', function(event) {
    handleTouch(event.touches[0].clientX, event.touches[0].clientY);
  });
  
  // Función para manejar eventos táctiles
  function handleTouch(touchX, touchY) {
    // Determinar si el toque está en la mitad izquierda o derecha de la pantalla
    if (touchX < window.innerWidth / 2) {
      tetrimino.moverIzquierda();
    } else {
      tetrimino.moverDerecha();
    }
  
    // Determinar si el toque está en la mitad superior o inferior de la pantalla
    if (touchY < window.innerHeight / 2) {
      tetrimino.girar();
    } else {
      tetrimino.moverAbajo();
    }
  }
  


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




