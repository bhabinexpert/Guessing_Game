// const img1 = "images/Css.png"
// const img2 = "images/GitHub-Logo.png"
// const img3 = "images/html.png"
// const img4 = "images/java.png"
// const img5 = "images/mongoDb.png"
// const img6 = "images/python.png"
// const img7 = "images/react.png"
// const img8 = 'images/nodeJs.png'
// const img9 = "images/js.png"
// const img0 = "images/vscode.png"

// const imgList = [
//     img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
//     img0, img1, img2, img3, img4, img5, img6, img7, img8, img9
// ]

// const shuffledImg = imgList.sort(() => 0.5 - Math.random()); // shuffle the image randomly
// console.log(shuffledImg)

// const cards = document.querySelectorAll('.row img, .row-2 img, .row-3 img, .row-4 img, .row-5 img');

// let flippedCards = []; // stores the cards objects which are clicked
// let lockBoard = false; // prevent multiple clicks while guessing

// cards.forEach((card, index) => {
//     card.dataset.img = shuffledImg[index] // stores the img
//     card.dataset.flipped = false; // tracks if the img is revealed
// })

// cards.forEach((card, index) =>{
//     card.addEventListener('click', () => {
//         if(lockBoard || card.dataset.flipped === "true") return;

//         card.src = card.dataset.img;
//         card.dataset.flipped = "true"
//         flippedCards.push(card);

//         if(flippedCards.length === 2){
//             lockBoard = true;
//         }
//     // Match check
//       const [first, second] = flippedCards;
//       if (first.dataset.img === second.dataset.img) {
//         // Matched
//         flippedCards = [];
//         lockBoard = false;
//       } else {
//         // Not matched, flip back after 1s
//         setTimeout(() => {
//           first.src = "/images/question.png";
//           second.src = "/images/question.png";
//           first.dataset.flipped = "false";
//           second.dataset.flipped = "false";
//           flippedCards = [];
//           lockBoard = false;
//         }, 100);
//     }

       
//     });
// });

// document.getElementById("refreshBtn").addEventListener("click", () => {
//   // Reshuffle images
//   const newShuffledImg = imgList.sort(() => 0.5 - Math.random());

//   // Reset each card
//   cards.forEach((card, index) => {
//     card.src = "/images/question.png";          // Reset image
//     card.dataset.flipped = "false";             // Mark as not flipped
//     card.dataset.img = newShuffledImg[index];   // Assign new random image
//   });

//   // Clear flipped cards and unlock board
//   flippedCards = [];
//   lockBoard = false;
// });



// timer setup guide from chatGPT will override soon ... Only for demo and test!!


// === Image List Setup ===
const imgList = [
    "images/vscode.png", "images/Css.png", "images/GitHub-Logo.png", "images/html.png", "images/java.png",
    "images/mongoDb.png", "images/python.png", "images/react.png", "images/nodeJs.png", "images/js.png",
    "images/vscode.png", "images/Css.png", "images/GitHub-Logo.png", "images/html.png", "images/java.png",
    "images/mongoDb.png", "images/python.png", "images/react.png", "images/nodeJs.png", "images/js.png"
];

// === Shuffling images ===
let shuffledImg = imgList.sort(() => 0.5 - Math.random());

// === Selecting elements ===
const cards = document.querySelectorAll('.row img, .row-2 img, .row-3 img, .row-4 img, .row-5 img');
const timerDisplay = document.querySelector('.timer');
const refreshBtn = document.getElementById("refreshBtn");

let flippedCards = [];
let lockBoard = false;
let timerStarted = false;
let timer = null;
let timeLeft = 30;

// === Initial Card Setup ===
function setInitialCardState() {
    shuffledImg = imgList.sort(() => 0.5 - Math.random());
    cards.forEach((card, index) => {
        card.src = "/images/question.png";
        card.dataset.img = shuffledImg[index];
        card.dataset.flipped = "false";
        card.style.backgroundColor = ""; // Reset background
    });
    flippedCards = [];
    lockBoard = false;
    timerStarted = false;
    clearInterval(timer);
    timeLeft = 30;
    timerDisplay.textContent = "⏳ Time Left: 30s";
}

// === Start Countdown Timer ===
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `⏳ Time Left: ${timeLeft}s`;

        // Time out logic
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("⏰ Time's up! Game will be restarts now.");
            setInitialCardState(); // Reset game
        }
    }, 1000);
}

// === Card Click Logic ===
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Start timer only once
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }

        if (lockBoard || card.dataset.flipped === "true") return;

        card.src = card.dataset.img;
        card.dataset.flipped = "true";
        card.style.backgroundColor = "white";
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            lockBoard = true;
            const [first, second] = flippedCards;

            if (first.dataset.img === second.dataset.img) {
                flippedCards = [];
                lockBoard = false;
            } else {
                setTimeout(() => {
                    first.src = "/images/question.png";
                    second.src = "/images/question.png";
                    first.dataset.flipped = "false";
                    second.dataset.flipped = "false";
                    first.style.backgroundColor = "";
                    second.style.backgroundColor = "";
                    flippedCards = [];
                    lockBoard = false;
                }, 150);
            }
        }
    });
});

// === Refresh Button Click ===
refreshBtn.addEventListener("click", () => {
    clearInterval(timer);
    setInitialCardState();
});

// === Initialize Game on Load ===
setInitialCardState();
