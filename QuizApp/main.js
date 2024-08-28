

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

// select all elements and store each of it variable// to manipulate in every where;
const qustionElement = document.querySelector("#question");
const answersParent = document.querySelector("#answers");
const answerschild = answersParent.querySelectorAll(".answer-btn");
const nextBtn = document.querySelector("#next-btn");

// initialize indexes and numbers to their starting point//

// => questionStartingIndex, Number of question startingpoint, result starting point, mistakes starting point//

let questionStartingIndex = 0;
let questionNumberStartingPoint= 0;
let restulStartingPoint = 0;
let userMistakesStartingPoint = 0;

// Function that starts all those points//
 
const startQuizIndex = () => {
    questionStartingIndex = 0;
    questionNumberStartingPoint = 0;
    restulStartingPoint = 0;
    userMistakesStartingPoint = 0;
    playQuizApp()
}
// function That Displays The Question and available Answers//

const playQuizApp = () => {
    // resetPrevious Question//
    resetState()

    // Display current Questions//
    const currentq = questions[questionStartingIndex].question;
    questionNumberStartingPoint++
    qustionElement.textContent = `${questionNumberStartingPoint}. ${currentq}`
    // Display Answers//
    const myAnswers = questions[questionStartingIndex].answers;

    // get ForEach answer object and its properties + values;//
    myAnswers.forEach(ans =>{
       const customBtn = document.createElement("button");
       customBtn.className = 'new-class';
       answersParent.appendChild(customBtn);
       customBtn.textContent = `${ans.text}`;
       if(ans.correct){
         customBtn.dataset.correct = ans.correct;
       }
       
      customBtn.addEventListener("click", checking);
    })
}
 
const checking = (e) => {
    const clicked = e.target;
    const corrected = clicked.dataset.correct === 'true';
    if(corrected){
        clicked.classList.add("new-style");
        restulStartingPoint ++;
        
    }else{
        clicked.classList.add("new-fail")
    }

    
    Array.from(answersParent.children).forEach(ele=>{  
        if(ele.dataset.correct === 'true'){
            ele.classList.add("new-style");
            nextBtn.classList.add("show")
        }
        ele.disabled = 'true';
        nextBtn.classList.add("show");
    })
}

function resetState() {
    nextBtn.innerHTML = 'Next';
    
    Array.from(answersParent.children).forEach(child =>{
        answersParent.removeChild(child)
    })
  
}
    


const showScore = () => {
    resetState();
    qustionElement.innerHTML = `Your score is : ${restulStartingPoint} / ${questions.length}`

    nextBtn.innerHTML = 'Restart Quiz';
    nextBtn.classList.add("show");
    nextBtn.style = 'width: 230px;'
    }

const nextQuestion = () =>{
    questionStartingIndex++;
    if(questionStartingIndex < questions.length){
        nextBtn.classList.remove("show")
        playQuizApp()
    }else{
        showScore()
    }
   
}

nextBtn.addEventListener("click", () => {
    if(questionStartingIndex < questions.length){
        nextQuestion()
    }else{
       startQuizIndex() 
    }
})















startQuizIndex();