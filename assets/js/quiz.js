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
    
    resultDiv.innerText = `Your Score: ${totalScore} / 10`;

    if (totalScore >= 6) {
      resultDiv.innerText += "\nYou might benefit from bookkeeping help. Redirecting...";
      setTimeout(() => {
        window.location.href = "feedback.html";
      }, 3000);
    } else {
      resultDiv.innerText += "\nYou're doing great! Keep it up.";
    }

    resultDiv.classList.add("alert", "alert-info", "mt-3");
  });
});
