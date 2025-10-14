const questions = [
    {
        question: "K-pop is more than music; it’s a positive cultural movement that inspires fans worldwide", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "X"
    },
    {
        question: "Most K-pop idols are not treated fairly by their agencies.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "X"
    }, 
    {
        question: "I don't actively participate in fan communities, social media fan projects, or streaming campaigns.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "Y", 
    }, 
    {
        question: "I attend concerts, fan meetings, or other live events whenever possible.", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "Fan campaigns, streaming, and voting truly help idols succeed.", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "X"
    }, 
    {
        question: "I buy albums, official merchandise, or support idols financially.",
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "I wouldn’t listen to a group/idol if they had gone through a controversy which ruined their public image.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "X"
    }, 
    {
        question: "It’s impossible to fully enjoy K-pop while ignoring behind-the-scenes controversies.",
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "X"
    }, 
    {
        question: "I keep up with news, social media, or interviews about my favorite idols.", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "I can easily go for weeks without actively seeking out new K-pop content, and I don't feel like I'm missing out.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "I rarely use social media (exclude platforms like Discord and WhatsApp) to call out the K-pop industry's exploitative practices (e.g., slave contracts, overwork, mental health neglect).", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "X"
    }, 
    {
        question: "I mostly listen to K-pop casually and do not follow fan activities.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "My general mood can be significantly affected by news or updates about my favorite K-pop groups (e.g., a comeback, a scandal, a win on a music show).", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "Idols’ hardships (trainee life, contracts, schedules) are exaggerated by media and fans.", 
        answers: [
            { text: "Strongly Agree", score: 2 },
            { text: "Agree", score: 1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: -1 },
            { text: "Strongly Disagree", score: -2 }
        ], 
        axis: "X"
    }, 
    {
        question: "I rarely participate in fandom activities beyond enjoying the music/videos.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "Y"
    }, 
    {
        question: "The K-pop industry is exploitative and prioritizes profit over artists’ well-being.", 
        answers: [
            { text: "Strongly Agree", score: -2 },
            { text: "Agree", score: -1 },
            { text: "Neutral / Don't Know", score: 0 },
            { text: "Disagree", score: 1 },
            { text: "Strongly Disagree", score: 2 }
        ], 
        axis: "X"
    }
];

const questionElement = document.getElementById("question");
const answersButtonsElement = document.getElementById("answer-buttons"); 
const nextButtonElement = document.getElementById("next-btn");
let scoreX = 0, scoreY = 0;
let currentQuestionIndex = 0;
let selectedScore = null;

function startQuiz() {
    currentQuestionIndex = 0; 
    scoreX = 0; 
    scoreY = 0;
    nextButtonElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNumber = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.text === "Strongly Agree") {
            button.classList.add("sa");
        } else if (answer.text === "Agree") {
            button.classList.add("a");
        } else if (answer.text === "Neutral / Don't Know") {
            button.classList.add("ndk");
        } else if (answer.text === "Disagree") {
            button.classList.add("d");
        } else if (answer.text === "Strongly Disagree") {
            button.classList.add("sd");
        }
        answersButtonsElement.appendChild(button);

        if(Number.isInteger(answer.score)) {
            button.dataset.score = answer.score; 
        }

        button.addEventListener("click", selectAnswer);        
    });
}

function resetState() {
    nextButtonElement.style.display = "none";
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild(answersButtonsElement.firstChild);
    }
    selectedScore = null;
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const buttons = document.querySelectorAll(".btn"); 

    buttons.forEach(btn => btn.classList.remove("selected")); 
    selectedBtn.classList.add("selected"); 

    selectedScore = parseInt(selectedBtn.dataset.score);
    nextButtonElement.style.display = "block";
}

nextButtonElement.addEventListener("click", () => {
    if(selectedScore === null) return; 

    let currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.axis === "X") {
        scoreX += selectedScore;
    } else if (currentQuestion.axis === "Y") {
        scoreY += selectedScore;
    } 

    currentQuestionIndex++; 

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    resetState();
    questionElement.innerHTML = `Quiz Complete. Your scores:\nX: ${scoreX}\nY: ${scoreY}\nCoordinate: (${scoreX/8}, ${scoreY/8})`;
    nextButtonElement.style.display = "none";

    console.log("Final X score:", scoreX);
    console.log("Final Y score:", scoreY);
}

startQuiz();

