console.log("Quiz script loaded");

const submitButton = document.getElementById('submit-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.querySelector('quiz-container');

startQuizBtn.addEventListener('click', () => {
    loadQuestion();
    startQuizBtn.style.display = 'none';
});

#startQuizBtn.addEventListener('click', () => {
    console.log("Button clicked");
    quizContainer.style.display = 'block';
    startButton.style.display = 'none';
    loadQuestion();
});

const quizData = [
    {
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

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const startQuizBtn = document.getElementById('start-quiz-btn');
const resultElement = document.getElementById('result');

loadQuestion();

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });

};

function checkAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer before submitting.");
        return;
    }

    const currentQuizData = quizData[currentQuestioon];
    if (selectedAnswer === currentQuestion) {
      }  score++;
        resultElement.innerText = "Correct!";
    }  else {
        resultElement.innerText = `Doh! The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    } 
    currentQuestion++;
    if (currentQuestionQuizData < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }

    currentQuestionindex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        resultElement.innerText = `Quiz Over! Your final score is ${score} out of ${quizData.length}.`;
        submitButton.disabled = true;
    }


submitButton.addEventListener('click', () => {
    checkAnswer();
});
