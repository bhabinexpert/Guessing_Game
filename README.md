🎴 Memory Matching Game


![image](https://github.com/user-attachments/assets/e9acda84-39f8-44f7-b3e2-d638f8f7218e)



Welcome to the Memory Matching Game, an engaging and interactive web-based game where players test their memory by matching pairs of cards featuring programming-related icons! Built with HTML, CSS, and JavaScript, this game challenges players to find all matching pairs within a 30-second timer, with smooth animations and a responsive design. Perfect for casual gamers or developers looking to explore DOM manipulation and game logic.

🌟 Project Overview
The Memory Matching Game is a browser-based game where players flip cards to reveal icons (e.g., Python, JavaScript, React) and attempt to match identical pairs. The game features a 5x4 grid of 20 cards (10 unique icons, each appearing twice), a countdown timer, and a refresh button to restart the game. The objective is to match all pairs before time runs out, with visual feedback for matches and mismatches.
Key Features

Interactive Card Flipping: Click cards to reveal icons, with smooth flip animations.
Randomized Layout: Cards are shuffled at the start of each game for replayability.
30-Second Timer: Adds urgency, resetting the game if time expires.
Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile).
Refresh Button: Restarts the game with a new card layout and resets the timer.
Visual Feedback: Cards highlight on match/mismatch, with a rotation effect on click.


🚀 Getting Started
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
No additional software or dependencies required, as the game runs entirely in the browser.

Installation

Clone the Repository:
git clone https://github.com/bhabinexpert/Guessing_Game.git
cd Guessing_Game


Ensure Files Are Present:

index.html: The main HTML file with the game structure.
style.css: Styles for the game layout and animations.
game.js: JavaScript logic for card flipping, matching, and timer.
images/: Folder containing card icons (e.g., vscode.png, python.png) and question.png for hidden cards.


Run the Game:

Open index.html in a web browser (e.g., double-click the file or use a local server like Live Server in VS Code).
Alternatively, host the files on a web server for online access.




🎮 How to Play

Start the Game:

Open index.html in a browser. The game loads a 5x4 grid of cards, all showing a question mark (question.png).


Flip Cards:

Click a card to reveal its icon (e.g., Python or React logo).
Click a second card to reveal another icon.


Match Cards:

If the two cards have the same icon, they remain face-up (matched).
If they don’t match, they flip back to question marks after a 150ms delay.


Beat the Timer:

You have 30 seconds to match all 10 pairs.
If time runs out, an alert notifies you, and the game resets.


Restart the Game:

Click the Refresh button (bottom-right) to shuffle the cards, reset the timer, and start over.




📂 Project Structure
Guessing_Game/
├── images/
│   ├── question.png       # Default card back
│   ├── vscode.png         # Icon for VS Code
│   ├── Css.png            # Icon for CSS
│   ├── GitHub-Logo.png    # Icon for GitHub
│   ├── html.png           # Icon for HTML
│   ├── java.png           # Icon for Java
│   ├── mongoDb.png        # Icon for MongoDB
│   ├── python.png         # Icon for Python
│   ├── react.png          # Icon for React
│   ├── nodeJs.png         # Icon for Node.js
│   ├── js.png             # Icon for JavaScript
├── index.html             # Game structure and layout
├── style.css              # Styling for cards, layout, and animations
├── game.js                # Game logic, timer, and card interactions


🧑‍💻 Code Highlights
The game leverages JavaScript for dynamic behavior, CSS for styling, and HTML for structure. Here’s a key snippet from game.js showing the card-flipping and matching logic:
cards.forEach((card) => {
    card.addEventListener('click', () => {
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

Key Aspects:

Event Listeners: Each card listens for clicks, revealing its icon and tracking state via dataset.
Matching Logic: Compares dataset.img of two flipped cards to determine a match.
Timer Integration: Starts a 30-second countdown on the first click, resetting on timeout or refresh.
Board Locking: Prevents multiple clicks during animations using lockBoard.


🎨 Styling Highlights
From style.css, the game features a polished and responsive design:

Card Grid: A 5x4 grid with flexbox (first-row, second-row, etc.) ensures even spacing and responsiveness.
Animations: Cards rotate 360° on click and have a hover shadow effect for interactivity.
Responsive Layout: Media queries adjust card sizes and container width for mobile and tablet screens.
Aesthetic: A clean background (#9a9794), rounded card corners, and a glowing button enhance the visual appeal.

Example CSS for card hover:
.row:hover,
.row-2:hover,
.row-3:hover,
.row-4:hover,
.row-5:hover {
    box-shadow: 0 0 15px rgba(95, 6, 248, 0.2);
    transition: box-shadow 0.3s ease;
}


🛠️ Enhancements & Future Plans

Score Tracking: Add a score system based on matches or time remaining.
Sound Effects: Include audio for card flips, matches, and game over.
Local Storage: Save high scores or game progress.
Win Condition: Display a victory message when all pairs are matched before the timer ends.
Improved Animations: Add flip transitions using CSS 3D transforms.


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

Please ensure code follows the existing style (e.g., consistent indentation, clear comments) and test thoroughly.

🙌 Acknowledgments

Inspired by classic memory-matching games.
Icons sourced from publicly available programming-related logos.
Timer logic adapted with guidance from ChatGPT (noted in code comments).
Built with ❤️ for learning and fun! by @bhabin


Flip, match, and conquer the cards! Open index.html and start playing now! 🎉
@bhabin
