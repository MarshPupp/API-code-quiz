let questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: '',
        correctAnswer: '',
    },
    {
        question: '',
        answer: '',
        correctAnswer: '',
    },
    {
        question: '',
        answer: '',
        correctAnswer: '',
    },
    {
        question: '',
        answer: '',
        correctAnswer: '',
    },
    {
        question: '',
        answer: '',
        correctAnswer: '',
    },
]

function timer() {
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