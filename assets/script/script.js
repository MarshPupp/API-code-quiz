let questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: ['for loops','terminal/bash','console.log','JavaScript'],
        correctAnswer: 'console.log',
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables',
        answer: ['curly brackets','commas','parenthesis','quotes'],
        correctAnswer: 'quotes',
    },
    {
        question: 'Arrays in JavaScript can be used to store ___',
        answer: ['booleans','other arrays','numbers and strings','all of the above'],
        correctAnswer: 'all of the above',
    },
    {
        question: 'The condition in an if/else statement is enclosed with ___',
        answer: ['parenthesis','quotes','square brackets','curly brackets'],
        correctAnswer: 'curly brackets',
    },
    {
        question: 'commonly used data types include:',
        answer: ['strings','numbers','booleans','all of the above'],
        correctAnswer: 'all of the above',
    },
];

function QuestionHTML(questionObj, questionIndex) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
    questionContainer.id = `question${questionIndex + 1}`;

    const questionHeading = document.createElement("h2");
    questionHeading.textContent = `Question ${questionIndex + 1}: ${questionObj.question}`;
    questionContainer.appendChild(questionHeading);

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");
    questionObj.answers.forEach((answer, index) => {
        const optionItem = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${questionIndex + 1}`;
        input.value = `option${index + 1}`;
        optionItem.appendChild(input);
        optionItem.appendChild(document.createTextNode(` ${answer}`));
        optionsList.appendChild(optionItem);
    });
    questionContainer.appendChild(optionsList);

    return questionContainer;
}

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