
const songs = [
    { title: "Jaanam - Bad Newz", url: "./songs/Jaanam - Bad Newz.mp3" },
    { title: "Khoobsurat - Stree 2", url: "./songs/Khoobsurat - Stree 2.mp3" },
    { title: "Vekh Sohneyaa", url: "./songs/Vekh Sohneyaa.mp3" },
];

let currentIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const songInfo = document.getElementById("current-song");

function loadSong(index) {
    const song = songs[index];
    if (song) {
        audioPlayer.src = song.url;
        songInfo.textContent = `Now playing: ${song.title}`;
    }
}

document.getElementById("play-pause").addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById("play-pause").textContent = "⏸ Pause";
    } else {
        audioPlayer.pause();
        document.getElementById("play-pause").textContent = "▶️ Play";
    }
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audioPlayer.play();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audioPlayer.play();
});

loadSong(currentIndex);