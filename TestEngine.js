let questions = [];
let currentQuestionIndex = 0;

// Load JSON data
async function loadQuestions() {
  console.log("Loading...");
    try {
        const response = await fetch('QuestionsFormatDONOTEDIT.json');
        console.log("Everything works!");
        questions = await response.json();
        console.log("Everything works 2!");
        displayQuestion();
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

// Display the current question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question-container").innerHTML = "<h2>Quiz Completed!</h2>";
        document.getElementById("next-button").style.display = "none";
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.text;

    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = "";

    questionData.answers.forEach(answer => {
        const li = document.createElement("li");
        li.innerText = answer.text;
        li.addEventListener("click", () => {
            alert(`You selected: ${answer.text}`);
        });
        answerList.appendChild(li);
    });
}

// Handle Next Question Button
document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});

// Load the questions when the page loads
window.onload = loadQuestions;
