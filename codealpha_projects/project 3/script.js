let audio = document.getElementById("audio");

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function changeVolume(value) {
    audio.volume = value;
}