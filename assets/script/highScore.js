window.onload = function() {
    displayScores()
}

let scores = JSON.parse(localStorage.getItem('scores')) || [];
const scoresContainer = document.getElementById('scores-container');
const highScoreContainer = document.getElementById('highScore-container');

function displayScores() {
    scores.sort((a,b) => b.score - a.score);

    let tableHtml = '<table>';
    tableHtml += '<tr><th>Rank</th><th>Initials</th><th>Score</th></tr>';
    scores.forEach((entry, index) => {
        tableHtml += `<tr><td>${index + 1}</td><td>${entry.initials}</td><td>${entry.score}</td></tr>`;
    });
    tableHtml += '</table>';

    scoresContainer.innerHTML = tableHtml;

    highScoreContainer.appendChild(scoresContainer);
};
