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
    nextButtonElement.style.display = "none";
    const canvas = document.getElementById("kpopCompass");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Clear canvas
    ctx.clearRect(0, 0, w, h);



    // --- Quadrants ---
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "#f7b3c2"; // top-left
    ctx.fillRect(0, 0, cx, cy);
    ctx.fillStyle = "#b3d1f7"; // top-right
    ctx.fillRect(cx, 0, cx, cy);
    ctx.fillStyle = "#b3f7b9"; // bottom-left
    ctx.fillRect(0, cy, cx, cy);
    ctx.fillStyle = "#f7e2b3"; // bottom-right
    ctx.fillRect(cx, cy, cx, cy);
    ctx.globalAlpha = 1;

    // --- Axes ---
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();

    // --- Outer Labels (like second image) ---
    ctx.font = "bold 18px Poppins";
    ctx.fillStyle = "#111";
    ctx.textAlign = "center";


    // --- Corner tags ---
    ctx.font = "bold 13px Poppins";
    ctx.fillText("Obsessed Realist", 100, 35);
    ctx.fillText("Obsessed Idealist", w - 100, 35);
    ctx.fillText("Casual Realist", 100, h - 20);
    ctx.fillText("Casual Idealist", w - 100, h - 20);

    // --- Plot point using real scores ---
    const totalXQuestions = questions.filter(q => q.axis === "X").length;
    const totalYQuestions = questions.filter(q => q.axis === "Y").length;

    // Normalize (so it fits in -1 to +1 range)
    const normalizedX = scoreX / (totalXQuestions * 2);
    const normalizedY = scoreY / (totalYQuestions * 2);

    // Calculate pixel positions
    const pointX = cx + normalizedX * (w / 2);
    const pointY = cy - normalizedY * (h / 2);

    // Draw result point
    ctx.beginPath();
    ctx.arc(pointX, pointY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff4d4d";
    ctx.fill();

    document.querySelector(".quiz").style.display = "none";
    const resultTitle = document.createElement("h2");
    const resultDesc = document.createElement("p");
    if( scoreY / 8 > 0 && scoreX / 8 > 0 ) {
        resultDesc.innerHTML = "You are an <strong>Obsessed Idealist</strong> <br> An <strong>obsessed</strong> K-pop fan is a fan who is actively engaging with K-pop activities as well as their favorite idols’ life activities. These people might even support their idols financially. <br> <br> An <strong>idealist</strong> K-pop fan romanticizes K-pop and believes it has positive elements along with negative elements. Not all idealists deny K-pop’s oppressive nature—but they can enjoy the genre comfortably not thinking about the industry’s actions.";
    } else if (scoreY / 8 > 0 && scoreX / 8 < 0 ) {
        resultDesc.innerHTML = "You are an <strong>Obsessed Realist</strong> <br> An <strong>obsessed</strong> K-pop fan is a fan who is actively engaging with K-pop activities as well as their favorite idols’ life activities. These people might even support their idols financially. <br> <br> A <strong>realist</strong> K-pop fan often has cynical and realistic views over the genre. They focus a lot more on what the industry does to the idols, and might even generally find it difficult to enjoy the genre because of this.";
    } else if(scoreY / 8 < 0 && scoreX / 8 < 0) {
        resultDesc.innerHTML = "You are a <strong>Casual Realist</strong> <br> A <strong>casual</strong> K-pop fan is someone who is not that devoted towards K-pop and supporting groups and idols passionately. Yes, they might know a lot about K-pop in some cases, but generally they don’t follow what their favorites do all day. <br> <br> A <strong>realist</strong> K-pop fan often has cynical and realistic views over the genre. They focus a lot more on what the industry does to the idols, and might even generally find it difficult to enjoy the genre because of this.";
    } else if (scoreY / 8 < 0 && scoreX / 8 > 0) {
        resultDesc.innerHTML = "You are a <strong>Casual Idealist</strong> <br> A <strong>casual</strong> K-pop fan is someone who is not that devoted towards K-pop and supporting groups and idols passionately. Yes, they might know a lot about K-pop in some cases, but generally they don’t follow what their favorites do all day. <br> <br> An <strong>idealist</strong> K-pop fan romanticizes K-pop and believes it has positive elements along with negative elements. Not all idealists deny K-pop’s oppressive nature—but they can enjoy the genre comfortably not thinking about the industry’s actions.";
    } else if(scoreY / 8 === 0 && scoreX / 8 === 0) {
        resultDesc.innerHTML = "You are a <strong>Centrist</strong> <br> You hold balanced, neutral views on both axes. You see K-pop as neither an idealized cultural phenomenon nor a deeply flawed industry, and you engage with it in moderation — neither as a casual listener nor as an overly dedicated fan. You’re the midpoint of the entire compass.";
    } else if(scoreY / 8 === 0 && scoreX / 8 < 0) {
        resultDesc.innerHTML = "You are a <strong>Centrist Realist</strong> <br> As a <strong>centrist</strong> of the Casualism-Obsessivism axis, you are neither an obsessed nor a casual fan, but rather a <strong>moderate</strong> fan. <br> <br> A <strong>realist</strong> K-pop fan often has cynical and realistic views over the genre. They focus a lot more on what the industry does to the idols, and might even generally find it difficult to enjoy the genre because of this.";
    } else if(scoreY / 8 === 0 && scoreX / 8 > 0) {
        resultDesc.innerHTML = "You are a <strong>Centrist Idealist</strong> <br> As a <strong>centrist</strong> of the Casualism-Obsessivism axis, you are neither an obsessed nor a casual fan, but rather a <strong>moderate</strong> fan. <br> <br> An <strong>idealist</strong> K-pop fan romanticizes K-pop and believes it has positive elements along with negative elements. Not all idealists deny K-pop’s oppressive nature—but they can enjoy the genre comfortably not thinking about the industry’s actions.";
    } else if(scoreY / 8 > 0 && scoreX / 8 === 0) {
        resultDesc.innerHTML = "You are an <strong>Obsessed Centrist</strong> <br> An <strong>obsessed</strong> K-pop fan is a fan who is actively engaging with K-pop activities as well as their favorite idols’ life activities. These people might even support their idols financially.";
    } else if(scoreY / 8 < 0 && scoreX / 8 === 0) {
        resultDesc.innerHTML = "You are a <strong>Casual Centrist</strong> <br> A <strong>casual</strong> K-pop fan is someone who is not that devoted towards K-pop and supporting groups and idols passionately. Yes, they might know a lot about K-pop in some cases, but generally they don’t follow what their favorites do all day. <br> <br> As a <strong>centrist</strong> of the Realism-Idealism axis, you recognize both negative and positive sides of K-pop equally.";
    }
    resultTitle.textContent = `Your Position (${scoreX/totalXQuestions}, ${scoreY/totalYQuestions})`;
    resultTitle.style.textAlign = "center";
    resultTitle.style.marginTop = "10px";
    resultTitle.style.fontFamily = "Poppins";
    resultDesc.style.textAlign = "center";
    resultDesc.style.fontFamily = "Poppins";
    resultDesc.style.fontSize = "16px";
    resultDesc.style.fontWeight = "400";
    const container = document.querySelector(".container");
    container.insertBefore(resultTitle, canvas);
    container.insertBefore(resultDesc, canvas);

    const retakeBtn = document.createElement("button");
    retakeBtn.textContent = "Retake Quiz";
    retakeBtn.classList.add("btn", "retake-btn");
    retakeBtn.style.display = "block";
    retakeBtn.style.margin = "20px auto";
    retakeBtn.style.padding = "10px 20px";
    retakeBtn.style.borderRadius = "10px";
    retakeBtn.style.border = "none";
    retakeBtn.style.backgroundColor = "#ff4d88";
    retakeBtn.style.color = "white";
    retakeBtn.style.cursor = "pointer";
    retakeBtn.style.fontFamily = "Poppins";
    retakeBtn.style.fontSize = "16px";

    retakeBtn.addEventListener("click", () => {
        document.querySelector(".quiz").style.display = "block";
        canvas.style.display = "none";
        resultTitle.remove();
        resultDesc.remove();
        retakeBtn.remove();
        startQuiz();
    });

    document.querySelector(".container").appendChild(retakeBtn);

}

startQuiz();