let intervalId;
let startTime;
let elapsedTime = 0;

document.getElementById('start').addEventListener('click', function() {
    document.getElementById('stop').style.display = 'inline-block';
    document.getElementById('reset').style.display = 'inline-block';
    document.getElementById('start').style.display = 'none';
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor((elapsedTime % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((elapsedTime % (1000*60)) / 1000);
        let milliseconds = elapsedTime % 1000;
        document.getElementById('time').textContent = 
            (hours < 10 ? '0' + hours : hours) + ':' +
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds) + ':' +
            (milliseconds < 100 ? '0' + (milliseconds < 10 ? '0' + milliseconds : milliseconds) : milliseconds);
    }, 1);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('stop').style.display = 'none';
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('start').textContent = 'Continue';
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(intervalId);
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00:00:000';
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('start').textContent = 'Start';
    document.getElementById('stop').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
});


document.getElementById('stop').style.display = 'none';
document.getElementById('reset').style.display = 'none';
