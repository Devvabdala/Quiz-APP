const qustionElement = document.querySelector("#question");
const answersParent = document.querySelector("#answers");
const answerschild = answersParent.querySelectorAll(".answer-btn");
const nextBtn = document.querySelector("#next-btn");


const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which element is represented by the symbol 'O'?",
        answers: [
            { text: "Osmium", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Oganesson", correct: false },
            { text: "Osmium", correct: false }
        ]
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        answers: [
            { text: "Horse", correct: false },
            { text: "Camel", correct: true },
            { text: "Elephant", correct: false },
            { text: "Llama", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "450,000 km/s", correct: false },
            { text: "600,000 km/s", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Brain", correct: false },
            { text: "Heart", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "Which planet is the hottest in our solar system?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in traditional sushi?",
        answers: [
            { text: "Beef", correct: false },
            { text: "Chicken", correct: false },
            { text: "Fish", correct: true },
            { text: "Pork", correct: false }
        ]
    },
    {
        question: "What is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    }
];

// start the project next phase//

let currentQuestionIndex = 0;
let questionIndex = 0;
let result = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    result = 0;

    displayQuiz()
}

const displayQuiz = () =>{
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    qustionElement.innerHTML = `${questionIndex} . ${currentQuestion.question}`;
    // get Possible Answers//
    currentQuestion.answers.forEach((ans)=>{
        const creatbtns = document.createElement("button");
        creatbtns.className = 'new-class';
        creatbtns.textContent = ans.text
        answersParent.appendChild(creatbtns);

        if (ans.correct){
          creatbtns.dataset.correct = ans.correct;
          console.log();
          
        }

        creatbtns.addEventListener("click", check);
    })
}







function check(e){
const choos = e.target;
const correct = choos.dataset.correct === 'true';
if(!correct){
    choos.classList.add("new-fail")
}else{
    result++;  
}

 Array.from(answersParent.children).forEach(child =>{
    if (child.dataset.correct === 'true') {
        child.classList.add("new-style");
    }

    nextBtn.classList.add("show")
    child.disabled = 'true';
 })
}


function resetState(){
    if(questionIndex < questions.length){
        questionIndex++
    }else{
        questionIndex = questionIndex - questions.length;
    }
    nextBtn.innerHTML = 'Next';

    while(answersParent.firstChild){
        answersParent.removeChild(answersParent.firstChild)

}

}

function showScore(){
resetState()
qustionElement.innerHTML = `Quiz Completed! Your score is ${result} out of ${questions.length}`;
    nextBtn.innerHTML = 'Restart Quiz';
    nextBtn.classList.add("show");

}



function handlNextQuestion(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
    nextBtn.classList.remove("show")
    displayQuiz()
        
    }else{
        showScore()
    }
}







nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handlNextQuestion()
    }else{
        startQuiz();
        console.log('Am here restarted the quiz');
        
    }
})


startQuiz()

Array.from(answersParent.children).forEach(e =>{
    console.log(e

    );
    
})