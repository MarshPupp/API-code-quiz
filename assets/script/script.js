function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = 'timer:' + timeLeft;
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    
}