let startGame = document.getElementById("startGame");
let questionContainer = document.getElementsByClassName("question-container");
let countdown = document.getElementById("countdown");
const questionText = document.getElementById("question-p");
let restartGame = document.getElementById("restart");
let answerText = document.getElementById("answer-buttons")
let randomQuestions, currentQuestionIndex
let pointDiv = document.getElementById("point")
let pointText = document.getElementById("points-text")
let points = 0;
let header = document.querySelector(".logo");
let timer = document.getElementById("seconds");
let timerInterval;
let endingScreen = document.querySelector(".ending-screen")

function displayTime() {
    let time = 10;
    timerInterval = setInterval(() => {
        timer.innerHTML = time;
        time--;
        if(time === -1) {
            clearInterval(timerInterval);


            
            answerText.innerHTML = "";
            nextQuestion()

            

        }
    }, 1000)


}

header.addEventListener("click", function() {
    location.reload("index.html", "_self");
})

restartGame.addEventListener("click", function() {
    location.reload("index.html", "_self");
})
endingScreen.addEventListener("click", function() {
    location.reload("index.html", "_self")
})


startGame.addEventListener("click", function() {
    
    startGame.classList.add("active");
    startGame.style.transition = "0s";
    randomQuestions = questions.sort(() => Math.random() -.5 )
    currentQuestionIndex = 0;
    for(var i = 0; i < questionContainer.length; i++) {
        questionContainer[i].style.visibility = "visible";
    }
    countdown.style.visibility = "visible"; 
    restartGame.style.visibility ="visible"
    pointDiv.style.visibility ="visible"
    setNextQuestion();
})

function setNextQuestion() {
    
    
    showQuestion(randomQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
    displayTime()
    

}

function showQuestion(question) {
    questionText.innerHTML = question.question;

    question.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        answerText.appendChild(answerButton);

        answerButton.addEventListener("click", () => {
            if(answer.correct) {
                answerButton.classList.add("right");
                points++;
                document.body.classList.add("right");
                setTimeout(function () {
                    document.body.classList.remove("right");
                    
                }, 1500)
                console.log(points)
                
                if(points <= 1) {
                    pointText.innerHTML = points + " point";
                }
                else {
                    pointText.innerHTML = points + " points";
                }
                nextQuestion()

            }
            else {
                answerButton.classList.add("wrong");
                document.body.classList.add("wrong");
                setTimeout(function () {
                    document.body.classList.remove("wrong");
                }, 1500)

                nextQuestion();
            }
            
            setTimeout(function (){
                
                answerText.innerHTML = "";
            }, 1500)
            
            clearInterval(timerInterval)
            
            if(currentQuestionIndex === 15) {
                
                setTimeout(delayScreen, 1500);
                function delayScreen () {    
                    endingScreen.style.visibility ="visible";
                    questionContainer.style.visibility = "visible"
                    questionText.remove()

                }
                
            }
            
        })
        
    })
    



}


function nextQuestion () {
    if (currentQuestionIndex < randomQuestions.length) {
       setTimeout(setNextQuestion, 2000);
         }

}


// QUESTIONS 
const questions = [
    {
        question: "When did BTS debut?",
        answers: [
            {text: "2009", correct: false},
            {text: "2013", correct: true},
            {text: "2014", correct: false},
            {text: "2012", correct: false},
        ]
    },
    {
        question: "What is Jungkook's first name?",
        answers: [
            {text: "Jeon", correct: true},
            {text: "Kim", correct: false},
            {text: "Min", correct: false},
            {text: "Hoseok", correct: false},
        ]
    },
    {
        question: "Who is an Enhypen member?",
        answers: [
            {text: "Sunoo", correct: true},
            {text: "Taehyung", correct: false},
            {text: "Yeji", correct: false},
            {text: "Felix", correct: false},
        ]
    },
    {
        question: "Which band made the song 'Wannabe'?",
        answers: [
            {text: "IVE", correct: false},
            {text: "TWICE", correct: false},
            {text: "ITZY", correct: true},
            {text: "ENHYPEN", correct: false},
        ]
    },
    {
        question: "Which band released the Album 'Love Yourself'?",
        answers: [
            {text: "Enhypen", correct: false},
            {text: "BTS", correct: true},
            {text: "NCT", correct: false},
            {text: "AESPA", correct: false},
        ]
    },
    {
        question: "What is Niki's real name?",
        answers: [
            {text: "miki", correct: false},
            {text: "liki", correct: false},
            {text: "diki", correct: false},
            {text: "riki", correct: true},
        ]
    },
    {
        question: "Which label owns Enhypen?",
        answers: [
            {text: "BigHit", correct: false},
            {text: "JYP", correct: false},
            {text: "BeLift", correct: true},
            {text: "SM", correct: false},
        ]
    },
    {
        question: "Which of them is a song of Agust D",
        answers: [
            {text: "Amygdala", correct: true},
            {text: "likey", correct: false},
            {text: "Bite Me", correct: false},
            {text: "God's Menu", correct: false},
        ]
    },
    {
        question: "How many Member's does Stray Kids have",
        answers: [
            {text: "7", correct: false},
            {text: "10", correct: false},
            {text: "5", correct: false},
            {text: "8", correct: true},
        ]
    },
    {
        question: "When was Jungkook born?",
        answers: [
            {text: "1996", correct: false},
            {text: "1999", correct: false},
            {text: "1994", correct: false},
            {text: "1997", correct: true},
        ]
    },
    {
        question: "Which band was BigHit's second boyband?",
        answers: [
            {text: "TXT", correct: true},
            {text: "ENHYPEN", correct: false},
            {text: "NewJeans", correct: false},
            {text: "EXO", correct: false},
        ]
    },
    {
        question: "In which city is the Hybe building?",
        answers: [
            {text: "Tokyo", correct: false},
            {text: "Jeju", correct: false},
            {text: "Seoul", correct: true},
            {text: "Busan", correct: false},
        ]
    },    
    {
        question: "Who made the song 'Unforgiven?",
        answers: [
            {text: "IVE", correct: false},
            {text: "G-IDLE", correct: false},
            {text: "NewJeans", correct: false},
            {text: "LE SSERAFIM", correct: true},
        ]
    },
    {
        question: "Which of the BTS member has the most solo songs?",
        answers: [
            {text: "Jungkook", correct: false},
            {text: "Jimin", correct: false},
            {text: "Jin", correct: false},
            {text: "Suga", correct: true},
        ]
    },
    {
        question: "In which city was Jungkook born?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Incheon", correct: false},
            {text: "Busan", correct: true},
            {text: "Daegu", correct: false},
        ]
    },  
    
    
]


