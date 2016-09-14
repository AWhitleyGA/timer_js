var timer = $('#timer');
var startButton = $('#start');
var pauseButton = $('#pause');
var resetButton = $('#reset');

var seconds = 0;
var timerId;

function updateTime() {
  seconds = seconds + 1;
  timer.text('Time Elapsed: '+seconds);
}


timer.on('click', function() {

});

startButton.on('click', function() {
  timerId = setInterval(updateTime, 1000);
});

pauseButton.on('click', function() {
  clearInterval(timerId);
});

resetButton.on('click', function() {
    clearInterval(timerId);
    seconds = 0;
    timer.text('Stop Watch');
});
