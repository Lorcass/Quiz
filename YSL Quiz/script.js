const questions = [
    {
        question: "What is Gunna pushin?", 
        answers: [
            { text: "T", correct: false},
            { text: "Plea", correct: false},
            { text: "P", correct: true},
            { text: "A shopping cart with donuts", correct: false},
        ]
    },
    {
        question: "Who founded YSL Records?", 
        answers: [
            { text: "Lil Keed", correct: false},
            { text: "Young Thug", correct: true},
            { text: "Gunna", correct: false},
            { text: "Lil Baby", correct: false},
        ]
    },
    {
        question: "What is Young Thug's real name?", 
        answers: [
            { text: "Jeffery Lamar Williams", correct: true},
            { text: "Jeffery Joseph Williams", correct: false},
            { text: "Sergio Giavanni Kitchens", correct: false},
            { text: "Jefferey James Williams", correct: false},
        ]
    },
    {
        question: "When was YSL Records Founded?", 
        answers: [
            { text: "2013", correct: false},
            { text: "2014", correct: false},
            { text: "2015", correct: false},
            { text: "2016", correct: true},
        ]
    },
    {
        question: "Who was the first rapper signed to YSL Records?", 
        answers: [
            { text: "Lil Baby", correct: false},
            { text: "Lil Keed", correct: false},
            { text: "Young Thug", correct: false},
            { text: "Gunna", correct: true},
        ]
    },
    {
        question: "Who was never a member of YSL Records?", 
        answers: [
            { text: "NBA YoungBoy", correct: false},
            { text: "Lil Gotit", correct: false},
            { text: "Nav", correct: true},
            { text: "Young Thug", correct: false},
        ]
    },
    {
        question: "Did Gunna snitch?", 
        answers: [
            { text: "No", correct: false},
            { text: "Yes", correct: true},
            { text: "No", correct: false},
            { text: "No", correct: false},
        ]
    },
    {
        question: "Bought a ____ now I'm a space cadet.", 
        answers: [
            { text: "Cheeseburger", correct: false},
            { text: "Spaceship", correct: true},
            { text: "UFO", correct: false},
            { text: "Jet", correct: false},
        ]
    },
    {
        question: "What is Gunna's best selling album of all time?", 
        answers: [
            { text: "Drip Harder", correct: true},
            { text: "Wunna", correct: false},
            { text: "DS4", correct: false},
            { text: "Drip or Drown 2", correct: false},
        ]
    },
    {
        question: "You can get the biggest ___ bag in the store if you want it.", 
        answers: [
            { text: "Birkin", correct: false},
            { text: "Dior", correct: false},
            { text: "Chanel", correct: true},
            { text: "Prada", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${[questions.length]}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
     }
})

startQuiz();