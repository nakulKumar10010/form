document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
      q1: "paris",
      q2: "jupiter",
      q3: "shakespeare",
    };

    let score = 0;
    let resultHTML = "";

    for (let key in answers) {
      const userAnswer = document
        .getElementById(key)
        .value.toLowerCase()
        .trim();
      const isCorrect = userAnswer === answers[key];
      resultHTML += `
        <div class="question mb-3">
          <p>${key}:</p>
          <p>Your Answer: <span class="   ${
            isCorrect ? "text-success fw-bold " : "text-danger fw-bold"
          }">${userAnswer}</span> ${isCorrect ? "&#10004;" : "&#10008;"}</p>
          <p>Correct Answer: ${answers[key]}</p>
        </div>
      `;
      if (isCorrect) {
        score++;
      }
    }

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
      <p>Your answers:</p>
      <div>${resultHTML}</div>
      <p>Your score: ${score} out of ${Object.keys(answers).length}</p>
    `;
  });
