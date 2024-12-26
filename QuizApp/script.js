document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    let startBtn = document.getElementById("start-btn");
    let quizData = [];
    let currentQuestionIndex = 0;
    let score = 0;
    var subjectSelect=document.getElementById("subject");
    let userName=document.getElementById("name");
    var subject=0;

    
  
    // Load quiz data
    fetch("./data/quiz.json")
      .then(response => response.json())
      .then(data => {
        quizData = data.quizzes; // Load Programming Quiz for simplicity
      });
  
    // Start the quiz
    function startQuiz(){
      var user=userName.value;
      if(! user){
        alert("Please Enter the Name");
        return;
      }
    var subjectSelect=document.getElementById("subject");
      subject=subjectSelect.value;
      if(! subject){
        alert("Please select a subject before start the quiz.");
        return;
      }

      const selectedQuiz=quizData.find((quiz)=>quiz.subject===subject);
      if (!selectedQuiz) {
        alert("Selected quiz not found!");
        return;
      }
  
      quizData = selectedQuiz.questions;
      currentQuestionIndex = 0;
      score = 0;
  
      startBtn.style.display = "none";
      userName.disabled=true;
      subjectSelect.disabled = true;
      renderQuestion();
  }

  startBtn.addEventListener("click", startQuiz);
  
    // Render a question
    function renderQuestion() {
      if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
      }
  
      const questionData = quizData[currentQuestionIndex];
      quizContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <div class="options">
          ${questionData.options
            .map((option, index) => `<button onclick="selectAnswer(${index})">${option}</button>`)
            .join("")}
        </div>
      `;
    }
  
    // Select an answer
    window.selectAnswer = function (index) {
      const questionData = quizData[currentQuestionIndex];
      if (index === questionData.answer) {
        score += 10; // Add points for a correct answer
      }
      currentQuestionIndex++;
      renderQuestion();
    };
  
    // Show results
    function showResults() {
      quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>${userName.value}'s Score: ${score}/${quizData.length * 10}</p>
        <button id="restart-btn">Restart</button>
        <button id="exit-btn">Exit</button> 
      `;
      document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  document.getElementById("exit-btn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
    }
  
    // Restart the quiz
    window.restartQuiz = function () {
      currentQuestionIndex = 0;
      score = 0;
      startBtn.style.display="block";
      userName.disabled=true;
      subjectSelect.disabled=true;
      quizContainer.innerHTML="";
      renderQuestion();
    };
  });
  