let description = document.getElementById("game-description")
let exitClicked = document.getElementById("exit");
let startClicked = document.getElementById("start-button");
let questionSide = document.getElementById("question");
let timeGoes = document.getElementById("Time-remain");
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
let timer;
let timeTicking = 20;
score_board.style.display = "none";

function startTimer(e){
    timer = setInterval(time , 10000000);
    function time() {
        timeGoes.textContent = e;
        e--;
        if (e < 0){
            clearInterval(timer)
        }
        if (e == 0){ 
            finishGame();
        }
    }
}
function firstQuestion(a) {
    startTimer(timeTicking);
    if (remained == 0){
        finishGame();
        return;
    }
    question_box.style.display = "block";
    score_board.style.display = "flex";
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
        Swal.fire({
            title: "Are you sure?",
            text: `Your answer is ${playerChoice} option.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Correct!",
                icon: "success"
              });
            }else {
                numberOfTrue--
                numberOfPoint -= 5
                remained++
                firstQuestion(a);
                return;
            }
          }).then(function(){nextQuestion()}).then(function(){score()});
          
        
    } else {
        numberOfFalse++;
        remained--
        Swal.fire({
            title: "Are you sure?",
            text: `Your answer is ${playerChoice} option.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "False!",
                icon: "warning"
              });
            }else {
                numberOfFalse--
                remained++
                firstQuestion(a);
                return;
            }
          }).then(function(){nextQuestion()}).then(function(){score()});
    }
}

function nextQuestion() { 
    clearInterval(timer);
    questionNumber++
    firstQuestion(questionNumber);
    clearInterval(timer)
    startTimer(timeTicking);
}

function finishGame() {
    setTimeout(function(){
    quit.style.display = "block";
    question_box.style.display = "none";
    exitClicked.style.display = "none";
    score_board.style.display = "none";
    finish.style.display = "block";
    finish.innerText = `The game is over. You have ${numberOfTrue} corrects.
    You've gotten ${numberOfPoint} points, out of 100.`
    return;
    },2000)
}


function returnBack() { 
    clearInterval(timer);
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
    clearInterval(timer);
    question_box.style.display = "none";
    score_board.style.display = "none";
    exitClicked.style.display = "none";
    quit.style.display = "block";
    finish.style.display = "block";
    finish.innerText = `You quit the game. You have ${numberOfTrue} corrects.
    You've gotten ${numberOfPoint} points, out of 100.`
    return;
}