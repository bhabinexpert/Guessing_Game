const img1 = "images/Css.png"
const img2 = "images/GitHub-Logo.png"
const img3 = "images/html.png"
const img4 = "images/java.png"
const img5 = "images/mongoDb.png"
const img6 = "images/python.png"
const img7 = "images/react.png"
const img8 = 'images/nodeJs.png'
const img9 = "images/js.png"
const img0 = "images/vscode.png"

const imgList = [
    img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img0, img1, img2, img3, img4, img5, img6, img7, img8, img9
]

const shuffledImg = imgList.sort(() => 0.5 - Math.random()); // shuffle the image randomly
console.log(shuffledImg)

const cards = document.querySelectorAll('.row img, .row-2 img, .row-3 img, .row-4 img, .row-5 img');

let flippedCards = []; // stores the cards objects which are clicked
let lockBoard = false; // prevent multiple clicks while guessing

cards.forEach((card, index) => {
    card.dataset.img = shuffledImg[index] // stores the img
    card.dataset.flipped = false; // tracks if the img is revealed
})

cards.forEach((card, index) =>{
    card.addEventListener('click', () => {
        if(lockBoard || card.dataset.flipped === "true") return;

        card.src = card.dataset.img;
        card.dataset.flipped = "true"
        flippedCards.push(card);

        if(flippedCards.length === 2){
            lockBoard = true;
        }
    // Match check
      const [first, second] = flippedCards;
      if (first.dataset.img === second.dataset.img) {
        // Matched
        flippedCards = [];
        lockBoard = false;
      } else {
        // Not matched, flip back after 1s
        setTimeout(() => {
          first.src = "/images/question.png";
          second.src = "/images/question.png";
          first.dataset.flipped = "false";
          second.dataset.flipped = "false";
          flippedCards = [];
          lockBoard = false;
        }, 100);
    }

       
    });
});

document.getElementById("refreshBtn").addEventListener("click", () => {
  // Reshuffle images
  const newShuffledImg = imgList.sort(() => 0.5 - Math.random());

  // Reset each card
  cards.forEach((card, index) => {
    card.src = "/images/question.png";          // Reset image
    card.dataset.flipped = "false";             // Mark as not flipped
    card.dataset.img = newShuffledImg[index];   // Assign new random image
  });

  // Clear flipped cards and unlock board
  flippedCards = [];
  lockBoard = false;
});


