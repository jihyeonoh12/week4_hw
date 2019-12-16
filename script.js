

var introBox = document.querySelector("#introBox");
var startButton = document.querySelector("#button");
var newQuestion = document.querySelector("#questionsHere");
var firstChoice = document.querySelector("#firstA");
var secondChoice = document.querySelector("#secondA");
var thirdChoice = document.querySelector("#thirdA");
var fourthChoice = document.querySelector("#fourthA");
var listofAnswers = document.querySelector("#multipleChoice");
var rightorWrong = document.querySelector("#rightorWrong");
var scoreBox = document.querySelector("#viewScore");
var shortAnswers = document.querySelector("#shortAnswer");

var scores = 0;
var timer = 0;
var questionIndex = 0;

var userA ="";
var userInput = userA.value;


var listofQuestions = [
    {
        title: "1.Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "2.The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "3.What is NOT a Grid System in CSS?",
        choices: ["Simple Grid", "Flexbox", "Bootstrap", "jQuery"],
        answer: "jQuery"
    },
    {
        title: "4.What is Not a CSS selector?",
        choices: ["CSS Element Selector", "CSS Id Selector", "CSS Class Selector", "None of the above"],
        answer: "None of the above"
    },

    {
        title: "5.To align texts into center, what line of code do you have to use in CSS?",
        answer: "text-align"
    },

];


//first question
function startQuiz() {

    introBox.remove();
    scoreBox.innerText = "Score " + scores;

    newQuestion.innerText = listofQuestions[0].title;

    // var btn1 =document.createElement("BUTTON"); 
    // btn1.innerText = listofQuestions[0].choices[0];
    // firstChoice.appendChild(btn1);

    firstChoice.innerText = listofQuestions[0].choices[0];
    secondChoice.innerText = listofQuestions[0].choices[1];
    thirdChoice.innerText = listofQuestions[0].choices[2];
    fourthChoice.innerText = listofQuestions[0].choices[3];

    //right Answer
    thirdChoice.addEventListener("click", click);

    //wrong Answer
    firstChoice.addEventListener("click", click);
    secondChoice.addEventListener("click", click);
    fourthChoice.addEventListener("click", click);


}

function showQuestion() {
    newQuestion.innerText = listofQuestions[questionIndex].title;

    firstChoice.innerText = listofQuestions[questionIndex].choices[0];
    secondChoice.innerText = listofQuestions[questionIndex].choices[1];
    thirdChoice.innerText = listofQuestions[questionIndex].choices[2];
    fourthChoice.innerText = listofQuestions[questionIndex].choices[3];
}

function click(event) {
    console.log(event.toElement);
    if (listofQuestions[questionIndex].answer === event.toElement.innerText) {
        correctA();
    } else {
        wrongA();
    }
    questionIndex++;
    if (questionIndex == listofQuestions.length) {
        questionIndex = 0;


    }

    if (questionIndex == 4) {




        showLastQuestion();


    }

    showQuestion();


}

function showLastQuestion() {

    newQuestion.innerText = listofQuestions[4].title;

    firstChoice.innerText = "";
    secondChoice.innerText = "";
    thirdChoice.innerText = "";
    fourthChoice.innerText = "";
    rightorWrong.innerText = "";


    var userA = document.createElement("INPUT");
    userA.setAttribute("type", "text");
    userA.innerText = "write here";
    document.body.appendChild(userA);


    var userInput = userA.value;

    var submitBtn = document.createElement("BUTTON");
    submitBtn.innerText = "enter";
    document.body.appendChild(submitBtn);

    submitBtn.addEventListener("click", lastAnswer);


}

function lastAnswer() {

    
    var userInput = userA.value;
    

    if (listofQuestions[4].answer === userInput) {
        correctA();
    } else {
        wrongA();
    }

    submitBtn.remove();
    var finishBtn = document.createElement("BUTTON");
    finishBtn.innerText = "finish";
    document.body.appendChild(finishBtn);

    finishBtn.addEventListener("click", lastPage);


}


function correctA() {
    rightorWrong.innerText = "correct!";
    scores++;
    scoreBox.innerText = "Score " + scores;

}

function wrongA() {
    rightorWrong.innerText = "wrong!";

}


function storeScores() {

    var retrievedInfo = localStorage.getItem('totalScore');
    console.log('totalScore: ', JSON.parse(retrievedInfo));


}

function lastPage() {

    
    userA.remove();
    finishBtn.remove();
    rightorWrong.innerText = "";

    newQuestion.innerText = "Please insert your initial";

    var userInitial = document.createElement("INPUT");
    userInitial.setAttribute("type", "text");
    document.body.appendChild(userInitial);

    var totalScore = userInitial.value + scores

    localStorage.setItem('totalScore', JSON.stringify(testObject));



}





startButton.addEventListener("click", startQuiz);

