/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {

  // ----------------------------------------------------------------------------------------
  // Quiz Logic
  // -----------------------------------------------------------------------------------------

  const page1 = document.getElementById("page-1");
  const page2 = document.getElementById("page-2");
  const nextBtn = document.getElementById("next-btn");
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const radios = page1.querySelectorAll("input[type='radio']");
      const questions = [...new Set([...radios].map(r => r.name))];
      const answered = questions.every(name => quizForm.querySelector(`input[name="${name}"]:checked`));

      const alertCard = document.getElementById("alert-card");

      if (!answered) {
        alertCard.classList.add("show");
        setTimeout(() => alertCard.classList.remove("show"), 4000);
        return;
      }

      // Hide alert if previously shown
      alertCard.classList.remove("show");

      page1.classList.remove("active");
      page2.classList.add("active");
    });
  }

  if (quizForm) {
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
          window.location.href = "./feedback.html";
        }, 4000);
      } else {
        resultDiv.innerHTML += `<div class="feedback-line">You're doing great! Keep it up.<br>Back to Home...</div>`;
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 4000);
      }

      resultDiv.classList.add("alert", "alert-info", "mt-3");
    });
  }

});