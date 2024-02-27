const questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['for loops','terminal/bash','console.log','JavaScript'],
        correctAnswer: 'console.log',
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables',
        answers: ['curly brackets','commas','parenthesis','quotes'],
        correctAnswer: 'quotes',
    },
    {
        question: 'Arrays in JavaScript can be used to store ___',
        answers: ['booleans','other arrays','numbers and strings','all of the above'],
        correctAnswer: 'all of the above',
    },
    {
        question: 'The condition in an if/else statement is enclosed with ___',
        answers: ['parenthesis','quotes','square brackets','curly brackets'],
        correctAnswer: 'curly brackets',
    },
    {
        question: 'commonly used data types include:',
        answers: ['strings','numbers','booleans','all of the above'],
        correctAnswer: 'all of the above',
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 75;
let timeInterval;
let scores = JSON.parse(localStorage.getItem('scores')) || [];

const timerEL = document.getElementById('timer');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('questions-container');
const questionText = document.getElementById('question-text');
const answerMarker = document.getElementById('answer-marker');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const endContainer = document.getElementById('end-container');
const scoreText = document.getElementById('score-text');
const saveForm = document.getElementById('save-form');
const saveBtn = document.getElementById('save-button');
const scoresContainer = document.getElementById('scores-container');

window.onload = function() {
    startQuiz();
}

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerMarker.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(answer, currentQuestion.correctAnswer));
        answerMarker.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        resultText.textContent = 'Correct!';
    } else {
        resultText.textContent = 'Incorrect!';
        timeLeft -= 5;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        clearInterval(timeInterval);
        endQuiz();
    }
}

function startTimer() {
    timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timerEL.textContent = 'timer:' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function updateScore() {
    scoreText.textContent = 'score:' + score;
}

function endQuiz() {
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
    updateScore()
}

saveBtn.addEventListener('click', saveScoreToLocal);

function saveScoreToLocal(score) {
    const initialsInput = document.getElementById('initials').value.trim().toUpperCase();
    if (/^[A-Z]{3}$/.test(initialsInput)) {
        scores.push({ initials: initialsInput, score });
        localStorage.setItem('scores', JSON.stringify(scores));
    } else {
        console.log('Invalid initials. Please enter exactly 3 letters.');
    }
}
