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




var questions = [
    {question: "Commonly used data types DO NOT include"
    answers: {
        a1: "strings"
        a2: "booleans"
        a3: "alerts"
        a4: "numbers"
    },
    correctAnswer: "a3"
},
    {question: "The condition in an if/else statement is enclosed with: "
    answers: {
    a1: "quotes"
    a2: "curly brackets"
    a3: "parentheses"
    a4: "square brackets"
    }, 
    correctAnswer: "a3"
    }
    {question: "String values must be enclosed within ______ when being assigned to variables."
    answers: {
    a1: "commas"
    a2: "curly brackets"
    a3: "quotes"
    a4: "parentheses"
    },
    correctAnswer: "a3"
    }
    {question: "Arrays in JavaScript can be used to store: "
    answers: {
    a1: "numbers and strings"
    a2: "other arrays"
    a3: "booleans"
    a4: "all of the above"
    }, 
    correctAnswer: "a4"
    }
    {question: "A very usefil tool used during development and debugging for printing content to the debugger is:"
    answers: {
    a1: "JavaScript"
    a2: "terminal/bash"
    a3: "for loops"
    a4: "console log"
    },
    correctAnswer: "a4"
    }];




var gameOverEl = document.querySelector("#timer")
var secondsLeft = 60;
gameOverEl.addEventListener('click', function (event) {

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      gameOverEl.textContent = secondsLeft + " seconds left till game over.";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
  function sendMessage() {
    gameOverEl.textContent = "Game Over!";
  }
  setTime();
})

