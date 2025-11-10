const startQuizBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const questionElement = document.getElementById('question');
const optionsElement0 = document.getElementById('option0');
const optionsElement1 = document.getElementById('option1');
const optionsElement2 = document.getElementById('option2');
const optionsElement3 = document.getElementById('option3');
const resultElement = document.getElementById('result');
const scoreAmount = document.getElementById('actualScore');
const playAgain = document.getElementById('playAgain');
const playAgain0 = document.getElementById('playAgain0');
const playAgain1 = document.getElementById('playAgain1');
let score = 0;
let currentQuestion = 0;
quizContainer.style.visibility = "hidden";
playAgain.style.visibility = "hidden";
const quizData = [
    {       // questions //
        question: "What is the name of the bartender in Moe's Tavern?",
        options: ["Barney", "Moe", "Lenny", "Mohammed"],
        correctAnswer: 1
    },
    {
        question: "What is the home address of the Simpson family?",
        options: ["742 Evergreen Terrace", "123 Fake Street", "31 Spooner Street", "99 Maple Avenue"],
        correctAnswer: 0
    },
    {
        question: "Which character is known for the catchphrase 'D'oh!'?",
        options: ["Bart Simpson", "Homer Simpson", "Ned Flanders", "Mr. Burns"],
        correctAnswer: 1
    },
    {
        question: "What is the name of Bart Simpson's best friend?",
        options: ["Milhouse Van Houten", "Nelson Muntz", "Ralph Wiggum", "Martin Prince"],
        correctAnswer: 0
    },
    {
        question: "Who is the owner of the Springfield Nuclear Power Plant?",
        options: ["Homer Simpson", "Mr. Burns", "Waylon Smithers", "Lenny Leonard"],
        correctAnswer: 1
    },
    {
        question: "What is the name of Lisa Simpson's favorite jazz musician?",
        options: ["Bleeding Gums Murphy", "Duke Ellington", "Miles Davis", "John Coltrane"],
        correctAnswer: 0
    },
    {
        question: "Which character is a devout Christian and often says 'Okily Dokily'?",
        options: ["Ned Flanders", "Reverend Lovejoy", "Apu Nahasapeemapetilon", "Chief Wiggum"],
        correctAnswer: 0    
    },
    {
        question: "What is the name of the Simpson family's pet dog?",
        options: ["Santa's Little Helper", "Snowball II", "Laddie", "Fido"],
        correctAnswer: 0
    },
    {
        question: "Who is the principal of Springfield Elementary School?",
        options: ["Seymour Skinner", "Edna Krabappel", "Chalmers", "Dewey Largo"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the comic book store owner in Springfield?",
        options: ["Comic Book Guy", "Milhouse Van Houten", "Ned Flanders", "Apu Nahasapeemapetilon"],
        correctAnswer: 0
    },
    {
        question: "Which character is known for his love of donuts?",
        options: ["Homer Simpson", "Barney Gumble", "Chief Wiggum", "Ned Flanders"],
        correctAnswer: 0
    }
];
function quizmaster() {
    quizContainer.style.visibility = "visible";
    if (currentQuestion < quizData.length) {
        loadQuestion(currentQuestion)
    } else {
        // we must be at the end of the quiz!
        endQuiz();
    }
}
/**
 * This function loads the question and answer
 * options. 
 * @param {int} currentQuestionIndex 
 */
function loadQuestion(currentQuestionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement0.innerText = currentQuestion.options[0];
    optionsElement1.innerText = currentQuestion.options[1];
    optionsElement2.innerText = currentQuestion.options[2];
    optionsElement3.innerText = currentQuestion.options[3];
}
function checkAnswer(selectedAnswer) {
    // if selectedAnswer is answer
    if (selectedAnswer == quizData[currentQuestion].correctAnswer) {
        score ++;
        scoreAmount.innerText = score;
    } 
    currentQuestion ++;
    quizmaster();
}
function endQuiz() {
    resultElement.innerHTML = "<h3>Well done, you scored:</h3> " + score;
    playAgain.style.visibility = "visible";
}
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetQuiz);
function resetQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreAmount.innerText = score;
    resultElement.innerHTML = "";
    quizmaster();
}
function playGameAgain(buttonClicked) {
    if (buttonClicked == 0) {
        window.location.reload();
    }
    if (buttonClicked == 1) {
        window.location.replace("https://google.com");
    }
}
startQuizBtn.addEventListener('click', quizmaster);
