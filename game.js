const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text'));

// const timer = document.querySelector('#timer');

var gameOverEl = document.querySelector("#start")
let currentQuestion = {}
let acceptingAnswers = true
let timer = 120
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Commonly used data types DO NOT include',

        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        correctAnswer: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed with: ",

        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 3,
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",

        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store: ",

        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",

        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console log",
        answer: 4,
    }
]

var show = function (getNewQuestion) {
    getNewQuestion.style.display = 'block';
};
const SC0RE_POINTS = 10
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 120
    availableQuestions = [...questions]
    getNewQuestion()
}




getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || timer===0) {
        localStorage.setItem('mostRecentScore', timer)
        return window.location.assign('./end.html')
    }
    questionCounter++
    // progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        const selectedChoice = e.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'incorrect') {
            timer -=10
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

// incrementScore = num => {
// score -= num
// timerText.innerText = score
// }

function setTime() {
    var timerInterval = setInterval(function () {
        timer--;
        gameOverEl.textContent = timer + " seconds left till game over.";
        if (timer === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
gameOverEl.addEventListener('click', function () {
    setTime();
    startGame(); 
    console.log("clicked")
    console.log
})


// Hide an element
var hide = function (getNewQuestion) {
    getNewQuestion.style.display = 'none';
};

hide(getNewQuestion);

show(getNewQuestion);