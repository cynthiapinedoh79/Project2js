/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {

  // --- Quiz Logic ---
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
        }, 3000);
      } else {
        resultDiv.innerHTML += `<div class="feedback-line">You're doing great! Keep it up.</div>`;
      }

      resultDiv.classList.add("alert", "alert-info", "mt-3");
    });
  }

  // --- Fact Logic ---
  let factsIndex = 0;
  const factsContainer = document.getElementById("facts-container");
  const btnsContainer = document.getElementById("buttons-container");
  const newFactBtn = document.querySelector(".btn-darkRed");
  const clearBtn = document.querySelector(".btn-purple");

  if (factsContainer && btnsContainer && newFactBtn && clearBtn) {
    const facts = [
      {
        title: "What is Bookkeping?",
        content: "It is the process of recording financial transactions and keeping track of a company's financial health.",
        imageURL: "assets/images/bookk.png",
        imageAlt: "Bookkeeping information"
      },
      {
        title: "Tired of paperwork?",
        content: "Bookkeeping can be tedious and time-consuming, but it is essential for a business's success.",
        imageURL: "assets/images/2.jpg",
        imageAlt: "Frustration"
      },
      {
        title: "Numbers didn't match",
        content: "Inaccurate bookkeeping can lead to financial discrepancies and mismanagement.",
        imageURL: "assets/images/coffee.png",
        imageAlt: "Receipts & calculator"
      },
      {
        title: "Invoices",
        content: "Invoices are a crucial part of bookkeeping, as they document sales and purchases.",
        imageURL: "assets/images/invoice.jpg",
        imageAlt: "Invoice"
      },
      {
        title: "Unorganized",
        content: "Keeping track of receipts and invoices can be overwhelming, especially if they are not organized properly.",
        imageURL: "assets/images/paperwork.png",
        imageAlt: "Unorganized"
      },
      {
        title: "Gross, net, and taxable income",
        content: "Gross income: total revenue before expenses. Net income: profit after expenses. Taxable income: amount subject to taxes.",
        imageURL: "assets/images/calculator.png",
        imageAlt: "Calculating income"
      }
    ];

    function addFact() {
      const fact = facts[factsIndex];
      const newFactElement = document.createElement("div");
      newFactElement.classList.add("fact-card");
      newFactElement.innerHTML = `
          <h2>${fact.title}</h2>
          <p>${fact.content}</p>
          <img src="${fact.imageURL}" alt="${fact.imageAlt}">
      `;

      factsContainer.appendChild(newFactElement);
      factsIndex++;

      if (factsIndex === facts.length) {
        btnsContainer.removeChild(newFactBtn);
      }
    }

    function clearAllFacts() {
      factsContainer.innerHTML = "";
      if (!btnsContainer.contains(newFactBtn)) {
        btnsContainer.appendChild(newFactBtn);
      }
      factsIndex = 0;
    }

    newFactBtn.addEventListener("click", addFact);
    clearBtn.addEventListener("click", clearAllFacts);
  }
// --- Prize Logic ---

const revealBtn = document.getElementById("revealBtn");
  const backBtn = document.getElementById("backBtn");
  const cards = document.querySelectorAll(".card");
  const cardContainer = document.querySelector(".card-container");
  
    if (!revealBtn || !backBtn || !cardContainer) {
      console.warn("Missing elements:", revealBtn, backBtn, cardContainer);
      return;
    }
  
    backBtn.addEventListener("click", () => {
      window.history.back(-2);
    });
  
  
  revealBtn.addEventListener("click", () => {
    cardContainer.classList.remove("hidden");
    revealBtn.style.display = "none";
    backBtn.style.display = "inline-block";
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (document.querySelector(".card.flipped")) return;
      card.classList.add("flipped");
    });
  });

  backBtn.addEventListener("click", () => {
    // Reset UI
    cardContainer.classList.add("hidden");
    revealBtn.style.display = "inline-block";
    revealBtn.disabled = false;
    backBtn.style.display = "none";

    // Reset all cards
    cards.forEach(card => card.classList.remove("flipped"));
  });

// ENDING--- Prize Logic ---


});