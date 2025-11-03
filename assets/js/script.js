console.log("Quiz script loaded");

const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');

startQuizBtn.addEventListener('click', () => {
    loadQuestion();
    startQuizBtn.style.display = 'none';
});

startQuizBtn.addEventListener('click', () => {
    console.log("Button clicked");
    quizContainer.style.display = 'block';
    startQuizBtn.style.display = 'none';
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

const optionsContainer = document.getElementById('options');
const options = ['option1', 'option2', 'option3', 'option4'];
optionsContainer.innerHTML = '';
options.forEach((option, index) => {
    const optionsElement = document.createElement('btn');
    optionsElement.textContent = options;
    optionsElement.addEventListener('click', () => {
        selectAnswer(index);
    });
    optionsContainer.appendChild(optionsElement);
});



let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

loadQuestion();

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    selectedAnswer = null;
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.className = 'option-btn';
        button.onclick = () => selectAnswer(index, button);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(index, button) {
    selectedAnswer = index;
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach(b => b.classList.remove('selected'));
    button.classList.add('selected');
}

function checkAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer before submitting.");
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        resultElement.innerText = "Correct!";
        console.log("Score updated: " + score);
    } else {
        resultElement.innerText = `D'oh! The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        resultElement.innerText = `Quiz Over! Your final score is ${score} out of ${quizData.length}.`;
        startQuizBtn.disabled = true;
    }
}

startQuizBtn.addEventListener('click', () => {
    checkAnswer();
});

function checkAnswer() {
    if (selectedAnswer === null) {
        console.log(selectedAnswer);
        alert("Please select an answer before submitting.");
        return;
    }
}
