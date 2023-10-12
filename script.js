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
