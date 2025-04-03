let questions = [];
let currentQuestionIndex = 0;

// Load JSON data
async function loadQuestions() {
  console.log("Loading questions...");
    try {
        const response = await fetch('https://raw.githubusercontent.com/EclipseStorm7S/DatingQuestionaire/main/QuestionsFormatDONOTEDIT.json');
        textver = await response.text();
        questions = JSON.parse(textver);
        //console.log(textver);
        console.log(questions);
        displayQuestion();
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

// Display the current question
function displayQuestion() {
    if (currentQuestionIndex >= questions.Questions.length) {
        document.getElementById("question-container").innerHTML = "<h2>Quiz Completed! We are compilling your results now, please wait.</h2>";
        document.getElementById("next-button").style.display = "none";
        return;
    }

    console.log(Array.isArray(questions.Questions));
    const questionData = questions.Questions[currentQuestionIndex];
    console.log(questionData);
    document.getElementById("question-text").innerText = questionData.text;

    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = "";

    questionData.answers.forEach(answer => {
        const li = document.createElement("li");
        li.innerText = answer.text;
        li.addEventListener("click", () => {
          //alert(`You selected: ${answer.text}`);
          adjustValues(answer);
        });
        answerList.appendChild(li);
    });
}

function adjustValues(dataInput){
  currentQuestionIndex++;
  displayQuestion();
  console.log("Answer has been selected:", dataInput.text);
  console.log(dataInput);
  answerEffect = dataInput.result;
}

// Handle Next Question Button
document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});

// Load the questions when the page loads
window.onload = loadQuestions;
