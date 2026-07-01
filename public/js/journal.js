const dateInput = document.getElementById("date");
const moodButtons = document.querySelectorAll(".mood-btn");
const moodInput = document.getElementById("selectedMood");
const form = document.getElementById("journalForm");

// Nastaví dnešní datum
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

// Výběr nálady
moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        moodButtons.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        moodInput.value = button.textContent;

    });

});

// Odeslání formuláře
form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (moodInput.value === "") {

        alert("Vyber prosím svou náladu 😊");

        return;

    }

    const entry = {

        mood: moodInput.value,

        date: dateInput.value,

        title: document.getElementById("title").value,

        text: document.getElementById("entry").value

    };

    console.log(entry);

    alert("Zápisek je připraven k uložení.");

    form.reset();

    dateInput.value = today;

    moodButtons.forEach(btn => btn.classList.remove("selected"));

    moodInput.value = "";

});