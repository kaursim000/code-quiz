//create a basic html page, which has a start page including a button to start our quiz, have a view highschore button, and a timer



// in our js we want to create questions and answers that we can iterate through to display them to the user (obj, ) arr[{key: value, key: value,key: value,key: value}]

//set up some global variables, counter, timer, score, highscores 
//counter will dictate where we are in our questions array... counter++ to go to our next question 
//timer will use set interval so that we have a functioning timer that counts down that we can decrement if the user gets an incorrect answer 
//score save this because the user and their score should be saved in local storage 



//when the start button is clicked, start screen hide => timer starts => questions show up 
//use js to change our css, to tell the page based on whether we have started what shows on the screen 
//set up the timer so that it runs on the start of the game
//click handler on the start button 
//start the timer => make sure it ends on 0 seconds 
//change the css on all of the required html elements so that you get what we want on the page 
//display the first object in the array on the page 
//set up the handlers on the answer buttons so that when a user selects an answer we can check a few things 
//check if the answer is right or wrong => increment counter to the next question => if we are at the end of our array we want to end the quiz => incorrect answer decrement time increment counter 
//show the user if they got the question correct or incorrect underneath the answer options => set timeout to change classes to show the user right or wrong
//at the end of the quiz hide the questions and show the user score (created this var earlier), use the score and the user initials to save that info in local storage
//[{user: name, score: 10}] (stringify and store multiple things in local storage) each time we pull the info from local storage we set our highscores to either the info there || [] (an empty array )

//hide the user input screen and show the highscores to the user and ask if they want to play again 


var counter
var score
var highScore

var questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",
        },
        correctAnswer: "3",
    },
    {
        question: "The condition in an if/else statement is enclosed with: ",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square brackets",
        },
        correctAnswer: "3",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses",
        },
        correctAnswer: "3",
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
        },
        correctAnswer: "4",
    },
    {
        question: "A very usefil tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console log",
        },
        correctAnswer: "4",
    }];




var gameOverEl = document.querySelector("#start")
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        gameOverEl.textContent = secondsLeft + " seconds left till game over.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
gameOverEl.addEventListener('click', function () {
    setTime();
    console.log("clicked")
    console.log
})

function sendMessage() {
    gameOverEl.textContent = "Game Over!";
}

var questionsEl = document.createElement("div")
// questionsEl.style.display = "none"
console.log();

var displayQ = document.createElement("h1")
displayQ.textContent = questions[0].question;
questionsEl.appendChild(displayQ);
console.log(displayQ);
console.log(questions[0].question)
document.body.appendChild(questionsEl);


function displayQuestion() {
    // for (let i = 0; i < questions.length; i++) {
    //     displayQ
        for (let index = 0; index < 4; index++) {
        var answerBtn = document.createElement("button")
        answerBtn.textContent = questions[0].answers[index + 1];
        questionsEl.appendChild(answerBtn);
        
    }
}
// }

displayQuestion; 