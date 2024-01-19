let description = document.getElementById("game-description")
let exitClicked = document.getElementById("exit");
let startClicked = document.getElementById("start-button");
let questionSide = document.getElementById("question");
let quit = document.getElementById("ok");
let finish = document.getElementById("finish-game")
let answerA = document.getElementById("Option-A");
let answerB = document.getElementById("Option-B");
let answerC = document.getElementById("Option-C");
let answerD = document.getElementById("Option-D");
const question_box = document.getElementById("question-box");
const score_board = document.getElementById("score-board");
let numberOfTrue = 0;
let numberOfFalse = 0;
let numberOfPoint = 0;
let questionNumber = 0;
let remained = 20;


function firstQuestion(a) {
    if (remained == 0){
        finishGame();
        return;
    }
    question_box.style.display = "block";
    score_board.style.display = "block";
    startClicked.style.display = "none";
    exitClicked.style.display = "block";
    description.style.display = "none";
    questionSide.innerHTML = questions[a].question
    answerA.innerHTML = questions[a].A
    answerB.innerHTML = questions[a].B
    answerC.innerHTML = questions[a].C
    answerD.innerHTML = questions[a].D
    answerOfQuestion = questions[a].Answer;
};

function score() {
    document.getElementById('Number-of-true').innerHTML = numberOfTrue;
    document.getElementById('Number-of-false').innerHTML = numberOfFalse;
    document.getElementById('Number-of-points').innerHTML = numberOfPoint;
    document.getElementById('Remained-questions').innerHTML = remained;
}

function answered(e) {
    let playerChoice = e.getAttribute("data-option");
    if (playerChoice === answerOfQuestion) {
        numberOfTrue++
        numberOfPoint += 5;
        remained--
        score();
        questionNumber++
        nextQuestion();
    } else {
        numberOfFalse++;
        remained--
        score();
        questionNumber++
        nextQuestion();
    }
}

function nextQuestion() {
    firstQuestion(questionNumber);
}

function finishGame() {
    quit.style.display = "block";
    question_box.style.display = "none";
    exitClicked.style.display = "none";
    score_board.style.display = "none";
    finish.style.display = "block";
    finish.innerText = `The game is over. You have ${numberOfTrue} corrects.
    You've gotten ${numberOfPoint} points, out of 100.`
    return;
}


function returnBack() {
    question_box.style.display = "none";
    score_board.style.display = "none";
    startClicked.style.display = "block";
    exitClicked.style.display = "none";
    description.style.display = "block";
    quit.style.display = "none";
    finish.style.display ='none';
    numberOfTrue = 0;
    numberOfFalse = 0;
    numberOfPoint = 0;
    questionNumber = 0;
    remained = 20;
    score();
}

function exitGame() {
    question_box.style.display = "none";
    score_board.style.display = "none";
    exitClicked.style.display = "none";
    quit.style.display = "block";
    finish.style.display = "block";
    finish.innerText = `You quit the game. You have ${numberOfTrue} corrects.
    You've gotten ${numberOfPoint} points, out of 100.`
    return;
}