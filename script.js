
let songIndex = 0;
let songIndex1 = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "covers/Kesariya.jpg" },
    { songName: "Oh Antava Mava", filePath: "songs/2.mp3", coverPath: "covers/antava.jpg" },
    { songName: "Dhokha", filePath: "songs/3.mp3", coverPath: "covers/dhokha.jpg" },
    { songName: "Dil Galti Kar Baitha Hai", filePath: "songs/4.mp3", coverPath: "covers/Dil.jpg" },
    { songName: "Mehbooba Main Teri Mehbooba", filePath: "songs/5.mp3", coverPath: "covers/mehbooba.jpg" },
    { songName: "Raatan Lambiyan", filePath: "songs/6.mp3", coverPath: "covers/raat.jpg" },
    { songName: "Suit", filePath: "songs/7.mp3", coverPath: "covers/suit.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    progrss = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progrss;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    makeAllPlays();
    masterPlay1 = document.getElementById(songIndex);
    masterPlay1.classList.remove('fa-play-circle');
    masterPlay1.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    makeAllPlays();
    masterPlay2 = document.getElementById(songIndex);
    masterPlay2.classList.remove('fa-play-circle');
    masterPlay2.classList.add('fa-pause-circle');

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
