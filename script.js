// =============================
//  Memory Card Game - script.js
// =============================

// ---------- All available emojis ----------
const ALL_EMOJIS = ['🐶','🐱','🦊','🐸','🦋','🌸','🍕','⭐','🚀','🎮','🌈','🎯'];

// ---------- Game State Variables ----------
let flipped = [];    // Cards currently face-up (max 2)
let matched = 0;     // Number of pairs found
let moves   = 0;     // Total move count
let lock    = false; // Prevents clicking while checking a pair


// ---------- Utility: Shuffle an array ----------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


// ---------- Start / Restart the Game ----------
function startGame() {
  // Reset state
  flipped = [];
  matched = 0;
  moves   = 0;
  lock    = false;

  // Reset UI counters
  document.getElementById('moves').textContent = '0';
  document.getElementById('pairs').textContent = '0/8';
  document.getElementById('win').classList.remove('show');

  // Pick 8 random emojis and duplicate them to make pairs
  const picked = shuffle([...ALL_EMOJIS]).slice(0, 8);
  const deck   = shuffle([...picked, ...picked]); // 16 cards total

  // Build the grid
  const grid = document.getElementById('grid');
  grid.innerHTML = ''; // Clear old cards

  deck.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className     = 'card';
    card.dataset.emoji = emoji;
    card.dataset.index = index;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-back"></div>
        <div class="card-front">${emoji}</div>
      </div>
    `;

    card.addEventListener('click', () => flipCard(card));
    grid.appendChild(card);
  });
}


// ---------- Flip a Card ----------
function flipCard(card) {
  // Ignore clicks when: locked, already face-up, or already matched
  if (lock) return;
  if (card.classList.contains('flipped')) return;
  if (card.classList.contains('matched')) return;

  card.classList.add('flipped');
  flipped.push(card);

  // When 2 cards are face-up, check for a match
  if (flipped.length === 2) {
    checkMatch();
  }
}


// ---------- Check if Two Flipped Cards Match ----------
function checkMatch() {
  lock = true; // Prevent more clicks while checking

  moves++;
  document.getElementById('moves').textContent = moves;

  const [cardA, cardB] = flipped;
  const isMatch = cardA.dataset.emoji === cardB.dataset.emoji;

  if (isMatch) {
    handleMatch(cardA, cardB);
  } else {
    handleMismatch(cardA, cardB);
  }
}


// ---------- Handle a Matched Pair ----------
function handleMatch(cardA, cardB) {
  setTimeout(() => {
    cardA.classList.add('matched');
    cardB.classList.add('matched');

    matched++;
    document.getElementById('pairs').textContent = `${matched}/8`;

    flipped = [];
    lock    = false;

    if (matched === 8) {
      setTimeout(showWin, 400);
    }
  }, 600);
}


// ---------- Handle a Mismatched Pair ----------
function handleMismatch(cardA, cardB) {
  setTimeout(() => {
    cardA.classList.add('shake');
    cardB.classList.add('shake');

    setTimeout(() => {
      cardA.classList.remove('flipped', 'shake');
      cardB.classList.remove('flipped', 'shake');

      flipped = [];
      lock    = false;
    }, 420);
  }, 700);
}


// ---------- Show the Win Banner ----------
function showWin() {
  document.getElementById('win').classList.add('show');
  document.getElementById('win-msg').textContent =
    `Finished in ${moves} moves — ${getRating(moves)}`;
}


// ---------- Rate the Player's Performance ----------
function getRating(moveCount) {
  if (moveCount <= 12) return 'Amazing memory! 🌟';
  if (moveCount <= 18) return 'Well done! 👍';
  if (moveCount <= 24) return 'Good effort! 😊';
  return 'Keep practicing! 💪';
}


// ---------- Auto-start on page load ----------
startGame();