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




