window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.drum-kit-key[data-key="${e.keyCode}"]`);
    key.classList.add('play');
})

function removePlay() {
    this.classList.remove('play')
}

const keys = document.querySelectorAll('.drum-kit-key');
keys.forEach(key => key.addEventListener('transitionend', removePlay));


