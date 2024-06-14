// 'use strict';
 
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key)
    // console.log("Sound does not exists")
    if (!audio) return;
    // console.log("Sound exists")
    audio.currentTime = 0; // rewind to the start of audio
    audio.play();
    key.classList.add(`playing${e.keyCode}`)
    this.setTimeout(function() {
        key.classList.remove(`playing${e.keyCode}`)
    }, 200);
});
