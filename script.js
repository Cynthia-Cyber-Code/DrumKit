function sliderActions(audioSound, slider) {
    const newVolume = slider.value;
    audioSound.volume = newVolume / 100;
}

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const slider = document.getElementById("slider");

    slider.addEventListener("input", sliderActions(audio, slider));
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing${e.keyCode}`)
    this.setTimeout(function() {
        key.classList.remove(`playing${e.keyCode}`)
    }, 200);
});
