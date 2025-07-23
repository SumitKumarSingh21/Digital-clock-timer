// DIGITAL CLOCK
setInterval(function() {
    let now = new Date();
    document.getElementById('digitalClock').textContent = now.getHours().toString().padStart(2, '0') + ":" +
        now.getMinutes().toString().padStart(2, '0') + ":" +
        now.getSeconds().toString().padStart(2, '0');
}, 1000);

// COUNTDOWN TIMER
let countdown;
document.getElementById('start-countdown').onclick = function() {
    let sec = parseInt(document.getElementById('countdown-input').value);
    let display = document.getElementById('countdown-display');
    clearInterval(countdown);

    if (!sec || sec <= 0) {
        display.textContent = "Enter valid seconds";
        return;
    }

    function showTime() {
        let m = Math.floor(sec / 60);
        let s = sec % 60;
        display.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        sec--;
        if (sec < 0) {
            clearInterval(countdown);
            display.textContent = "Time's up!";
        }
    }
    showTime();
    countdown = setInterval(showTime, 1000);
};

// STOPWATCH
let swInterval, swTime = 0;
let swDisplay = document.getElementById('stopwatch-display');

function showSW() {
    let t = Math.floor(swTime / 1000);
    let m = Math.floor(t / 60);
    let s = t % 60;
    let c = Math.floor((swTime % 1000) / 10);
    swDisplay.textContent = (m < 10 ? "0" : "") + m + ":" +
        (s < 10 ? "0" : "") + s + ":" +
        (c < 10 ? "0" : "") + c;
}

document.getElementById('start-stopwatch').onclick = function() {
    if (swInterval) return;
    let last = Date.now();
    swInterval = setInterval(function() {
        let now = Date.now();
        swTime += now - last;
        last = now;
        showSW();
    }, 10);
};

document.getElementById('stop-stopwatch').onclick = function() {
    clearInterval(swInterval);
    swInterval = null;
};

document.getElementById('reset-stopwatch').onclick = function() {
    clearInterval(swInterval);
    swInterval = null;
    swTime = 0;
    showSW();
};

showSW();
