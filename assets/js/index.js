/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {

  function startQuiz() {
      window.location.href = "quiz.html";
  }

  function checkThis() {
      window.location.href = "checkThis.html";
  }

  function prize() {
      window.location.href = "prize.html";
  }

  // Attach event listeners with ES6-compatible checks
  var quizBtn = document.getElementById("quiz-btn");
  if (quizBtn) {
      quizBtn.addEventListener("click", startQuiz);
  }

  var checkBtn = document.getElementById("checkThis-btn");
  if (checkBtn) {
      checkBtn.addEventListener("click", checkThis);
  }

  var prizeBtn = document.getElementById("prize-btn");
  if (prizeBtn) {
      prizeBtn.addEventListener("click", prize);
  }

});

  