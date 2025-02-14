let noClickCount = 0;
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const headerText = document.getElementById("header-text");

// Messages to cycle through when "No" is clicked
const messages = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again! 💔",
    "You're breaking my heart! 💘",
    "Last chance! 💕"
];

noBtn.addEventListener("click", () => {
    if (noClickCount < messages.length) {
        noBtn.innerText = messages[noClickCount];
    } else {
        noBtn.innerText = "Okay... 💔";
    }

    noClickCount++;

    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";

    if (currentSize >= 50) {
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
    }
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {
    document.querySelector(".buttons").innerHTML = "";
    document.querySelector(".gif").src = ".vscode/PokemonGif2.gif";

    // Change header text
    headerText.innerText = "I couldn't be more happy with you! 💖";

    // Start heart animation
    createHearts();
});

// Function to create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector(".hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";

        // Randomize position and size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}
