// const volBtn = document.getElementById('volBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const playBtn = document.getElementById('playBtn');
const display = document.getElementById('clock');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

//cap the timer at 25 minutes:
function startTimer(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function pauseTimer(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetTimer(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00`;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime/1000 % 60);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    display.textContent = `${hours}:${minutes}:${seconds}`;

}

function openLinkedin(){
    window.open('https://www.linkedin.com/in/superba-bista-486b68236/','_blank');
}

function openGithub(){
    window.open('https://github.com/Superbaaa','_blank');
}

function openX(){
    window.open('https://x.com/daddytyauu','_blank');
}

const music = new Audio('lofi.mp3');
music.loop = true;
music.volume = 0.3;

function playMusic(){
    music.play();
}

function pauseMusic(){
    music.pause();
}

function muteMusic(){
    music.muted = !music.muted;
}