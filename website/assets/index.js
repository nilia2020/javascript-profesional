import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector("button");
const muteButton = document.getElementById("muteButton");

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
