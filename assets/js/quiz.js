/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function () {
  const page1 = document.getElementById("page-1");
  const page2 = document.getElementById("page-2");
  const nextBtn = document.getElementById("next-btn");
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  nextBtn.addEventListener("click", () => {
    // Ensure all radios in page 1 are filled
    const radios = page1.querySelectorAll("input[type='radio']");
    const questions = [...new Set([...radios].map(r => r.name))];
    const answered = questions.every(name => quizForm.querySelector(`input[name="${name}"]:checked`));
    if (!answered) {
      alert("Please answer all questions before continuing.");
      return;
    }

    page1.classList.remove("active");
    page2.classList.add("active");
  });

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let totalScore = 0;
    const formData = new FormData(quizForm);
    for (let [_, value] of formData.entries()) {
      totalScore += parseInt(value, 10);
    }

    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("show");

    resultDiv.innerHTML = `<div class="score-line">Your Score: ${totalScore} / 10</div>`;

    if (totalScore >= 6) {
      resultDiv.innerHTML += `<div class="feedback-line">You might benefit from bookkeeping help.<br>Redirecting...</div>`;
      setTimeout(() => {
        window.location.href = "feedback.html";
      }, 4000);
    } else {
      resultDiv.innerHTML += `<div class="feedback-line">You're doing great! Keep it up.</div>`;
    }

    resultDiv.classList.add("alert", "alert-info", "mt-3");
  });
});

