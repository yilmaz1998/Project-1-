let questions = [
{
    "question": "1)What is the capital city of United States of America?",
    "A":"New York",
    "B":"Washington",
    "C":"Chicago",
    "D":"Houston",
    "Answer":"B"
},
{
    "question": "2)What is the capital city of Russia?",
    "A":"St.Petersburg",
    "B":"Novgorod",
    "C":"Moscow",
    "D":"Krasnodar",
    "Answer":"C"
}
];

let startClicked = document.getElementById("start-button");
let questionSide = document.getElementById("question");
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
let remained = 10;


function firstQuestion(a){ 
    // question_box.style.display = "block";
    // score_board.style.display = "block";
    // startClicked.style.display = "none";
    questionSide.innerHTML = questions[a].question
    answerA.innerHTML = questions[a].A
    answerB.innerHTML = questions[a].B
    answerC.innerHTML = questions[a].C
    answerD.innerHTML = questions[a].D
    answerOfQuestion = questions[a].Answer; 
};

function score(){
     document.getElementById('Number-of-true').innerHTML = numberOfTrue;
     document.getElementById('Number-of-false').innerHTML = numberOfFalse;
     document.getElementById('Number-of-points').innerHTML = numberOfPoint;
     document.getElementById('Remained-questions').innerHTML = remained;
}

function answered(e){
   let playerChoice = e.getAttribute("data-option");
    if (playerChoice === answerOfQuestion){

    numberOfTrue++
    numberOfPoint += 10;
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

function nextQuestion(){
    firstQuestion(questionNumber);
}


