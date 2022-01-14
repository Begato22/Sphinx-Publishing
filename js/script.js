var listenAudio = document.getElementById("myAudio");
var dispalyAudio = false;
const audio = new Audio("/assets/sound/recorded_sound.mp3");

listenAudio.addEventListener("click", () => {
  dispalyAudio = !dispalyAudio;
  dispalyAudio ? audio.play() : audio.pause();
});
