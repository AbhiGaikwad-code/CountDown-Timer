let timer;
let timeInSeconds = 1800; // 30 minutes initially

function startTimer() {
    timer = setInterval(updateTimer, 1000);
    document.getElementById('timer').innerText = formatTime(timeInSeconds);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeInSeconds = 1800; // Reset to 30 minutes
    document.getElementById('timer').innerText = formatTime(timeInSeconds);
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function updateTimer() {
    if (timeInSeconds > 0) {
        timeInSeconds--;
        document.getElementById('timer').innerText = formatTime(timeInSeconds);
    } else {
        clearInterval(timer);
        alert('Countdown complete!');
    }
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}
