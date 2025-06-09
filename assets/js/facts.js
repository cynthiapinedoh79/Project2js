/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
      
    // -----------------------------------------------------------------------------------------
    // Fact Logic (Check This!)
    // -----------------------------------------------------------------------------------------

    let factsIndex = 0;
    const factsContainer = document.getElementById("facts-container");
    const btnsContainer = document.getElementById("buttons-container");
    const newFactBtn = document.querySelector(".btn-darkRed");
    const backCTBtn = document.getElementById("backCTBtn");

    const clearBtn = document.querySelector(".btn-purple");

    if (factsContainer && btnsContainer && newFactBtn && clearBtn && backCTBtn) {
        const facts = [{
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

            factsFbk.innerText = (factsIndex === facts.length) ?
                "See Facts!" :
                "Click to add another fact";

            if (factsIndex === facts.length) {
                btnsContainer.removeChild(newFactBtn);
                if (backCTBtn) backCTBtn.style.display = "inline-block";
            }
        }

        function clearAllFacts() {
            factsContainer.innerHTML = "";
            if (!btnsContainer.contains(newFactBtn)) {
                btnsContainer.appendChild(newFactBtn); // ✅ safer
            }
            factsIndex = 0;
            factsFbk.innerText = "Click to add another fact";
            if (backCTBtn) backCTBtn.style.display = "none";
        }

        newFactBtn.addEventListener("click", addFact);
        clearBtn.addEventListener("click", clearAllFacts);

        if (backCTBtn) {
            backCTBtn.addEventListener("click", () => {
                window.location.href = "./index.html";
            });
        }
    }

});