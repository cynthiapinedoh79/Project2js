/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {

// -----------------------------------------------------------------------------------------
// Prize Logic (Play & Save!)
// -----------------------------------------------------------------------------------------

// Grab DOM elements
const revealBtn = document.getElementById("revealBtn");
const backBtn = document.getElementById("backBtn");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

// If any essential element is missing, stop execution

if (!revealBtn || !backBtn || !cardContainer) {
  console.warn("Missing elements:", revealBtn, backBtn, cardContainer);
  return;
}

backBtn.addEventListener("click", () => {
  window.history.back(-2);
});

// Reveal button logic
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