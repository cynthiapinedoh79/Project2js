/* jshint esversion: 6 */

// Quiz Logic
document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  if (!quizForm || !resultDiv) return; // Exit if not on quiz page

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let totalScore = 0;
    const formData = new FormData(quizForm);

    for (let [key, value] of formData.entries()) {
      totalScore += parseInt(value, 10);
    }
    
    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("show");

    resultDiv.innerHTML = `
  <div class="score-line">Your Score: ${totalScore} / 10</div>
`;

if (totalScore >= 6) {
  resultDiv.innerHTML += `
    <div class="feedback-line">You might benefit from bookkeeping help.<br>Redirecting...</div>
  `;
  setTimeout(() => {
    window.location.href = "feedback.html";
  }, 4000);
} else {
  resultDiv.innerHTML += `
    <div class="feedback-line">You're doing great! Keep it up.</div>
  `;
}

    resultDiv.classList.add("alert", "alert-info", "mt-3");
  });
});
