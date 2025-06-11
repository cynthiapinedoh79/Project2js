/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------------------------------------------------------------------
    // Fact Logic (Check This!)
    // -----------------------------------------------------------------------------------------

    let factsIndex = 0;
    const factsContainer = document.getElementById("facts-container");
    const newFactBtn = document.getElementById("factsFbk"); // Correct ID from your HTML
    const factsFbk = document.getElementById("factsFbk");
    const clearBtn = document.querySelector(".btn-purple");
    const backCTBtn = document.getElementById("backCTBtn");
    const btnsContainer = document.getElementById("buttons-container");

    const facts = [
        {
            title: "What is Bookkeeping?",
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
        if (factsIndex >= facts.length) return;

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

        if (factsFbk) {
            factsFbk.innerText = (factsIndex === facts.length) ?
                "All facts displayed" :
                "Click to add another fact";
        }

        if (factsIndex === facts.length && newFactBtn && btnsContainer.contains(newFactBtn)) {
            btnsContainer.removeChild(newFactBtn);
        }
    }

    function clearAllFacts() {
        factsContainer.innerHTML = "";
        factsIndex = 0;

        if (!btnsContainer.contains(newFactBtn)) {
            btnsContainer.insertBefore(newFactBtn, backCTBtn); // place before Back button
        }

        if (factsFbk) {
            factsFbk.innerText = "See Facts!";
        }
    }

    // Check all required elements before binding events
    if (factsContainer && btnsContainer && newFactBtn && clearBtn && backCTBtn && factsFbk) {
        newFactBtn.addEventListener("click", addFact);
        clearBtn.addEventListener("click", clearAllFacts);
    } else {
        console.warn("Missing required elements for fact logic.");
    }

});

