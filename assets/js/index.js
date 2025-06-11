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
  
    //Attach event listeners
    document.getElementById("quiz-btn")?.addEventListener("click", startQuiz);
    document.getElementById("checkThis-btn")?.addEventListener("click", checkThis);
    document.getElementById("prize-btn")?.addEventListener("click", prize);
  
  });
  