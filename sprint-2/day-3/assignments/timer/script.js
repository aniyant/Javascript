const timerDisplay = document.querySelector('.timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let seconds = 0;
let minutes = 0;
let isRunning = false;
function startTimer() {
    if(!isRunning){
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);