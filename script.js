

var introBox = document.querySelector("#introBox");
var startButton = document.querySelector("#button");
var newQuestion = document.querySelector("#questionsHere");
var firstChoice = document.querySelector("#firstA")
var secondChoice = document.querySelector("#secondA");
var thirdChoice = document.querySelector("#thirdA");
var fourthChoice = document.querySelector("#fourthA");
var listofAnswers = document.querySelector("#multipleChoice");
var rightorWrong = document.querySelector("#rightorWrong");
var scoreBox = document.querySelector("#viewScore");
var shortAnswers = document.querySelector("#shortAnswer");
var finishButton = document.querySelector("#finishBox");
var submitButton = document.querySelector("#submitBox");
var initialField = document.querySelector("#initialBox");
var DoneButton = document.querySelector("#DoneBox");

var scores = 0;
var timer = 0;
var questionIndex = 0;

var userA = document.createElement("INPUT");
var finishBtn = document.createElement("BUTTON");
var submitBtn = document.createElement("BUTTON");

var userInput = userA.value;
var totalScore = 0;

var  userName ="";


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



function showQuestion() {

    introBox.remove();
    scoreBox.innerText = "Score " + scores;

    newQuestion.innerText = listofQuestions[questionIndex].title;

    firstChoice.className = "optionBox" ;
    secondChoice.className ="optionBox" ;
    thirdChoice.className ="optionBox" ;
    fourthChoice.className ="optionBox" ;

    firstChoice.innerText = listofQuestions[questionIndex].choices[0];
    secondChoice.innerText = listofQuestions[questionIndex].choices[1];
    thirdChoice.innerText = listofQuestions[questionIndex].choices[2];
    fourthChoice.innerText = listofQuestions[questionIndex].choices[3];

        //right Answer
        thirdChoice.addEventListener("click", click);

        //wrong Answer
        firstChoice.addEventListener("click", click);
        secondChoice.addEventListener("click", click);
        fourthChoice.addEventListener("click", click);
    
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

    firstChoice.remove();
    secondChoice.remove();
    thirdChoice.remove();
    fourthChoice.remove();


    var userA = document.createElement("INPUT");
    userA.setAttribute("type", "text");
    shortAnswers.appendChild(userA);


    var submitBtn = document.createElement("BUTTON");
    submitBtn.innerText = "enter";
    submitButton.appendChild(submitBtn);

    submitBtn.addEventListener("click", lastAnswer);

}



function lastAnswer() {

    
    var userInput = userA.value;
    
    if (listofQuestions[4].answer === userInput) {
        correctA();
      
    } else {

        wrongA();
        
    }

   shortAnswers.remove();
   submitButton.remove();

    
    var finishBtn = document.createElement("BUTTON");
    
    finishBtn.innerText = "finish";
    finishButton.appendChild(finishBtn);

    finishBtn.addEventListener("click", lastPage);


}



function lastPage() {


    finishButton.remove();

    newQuestion.innerHTML = "Please insert your initial";

    var userInitial = document.createElement("INPUT");
    userInitial.setAttribute("type", "text");
    initialField.appendChild(userInitial);


    var DoneBtn = document.createElement("BUTTON");
    DoneBtn.innerText = "Done";
    DoneButton.appendChild(DoneBtn);
    DoneBtn.addEventListener("click", thankYouPage);

}



function thankYouPage() {

    DoneButton.remove();
    initialField.remove();

    userName = userInitial.innerText;

    // Show Thank you + name
    newQuestion.innerText = "Thank you!" + userName;


    var restartBtn = document.createElement("DIV");
    restartBtn.innerHTML = "<button>submit</button>";
    btnContainer.appendChild(restartBtn);
    restartBtn.addEventListener("click", storeScores);

}




function correctA() {
    rightorWrong.innerText = "correct!";
    scores++;
    scoreBox.innerText = "Score " + scores;

    setInterval(delayText,2000);

}

function wrongA() {
    rightorWrong.innerText = "wrong!";
    
    setInterval(delayText,2000);

}

function delayText() {
    rightorWrong.innerText = "";

}


function storeScores() {

    
    // totalScore = initialField.innerText + scores;
    localStorage.setItem('totalScore', JSON.stringify(initialField.innerText + scores));

}


function viewScore() {

    var retrievedInfo = localStorage.getItem('totalScore');
    console.log('totalScore: ', JSON.parse(retrievedInfo));

}







startButton.addEventListener("click", showQuestion);

