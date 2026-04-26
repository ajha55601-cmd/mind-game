# 🃏 Memory Card Game

A fun and beginner-friendly browser-based memory puzzle game built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no libraries, just clean vanilla code.

![Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML](https://img.shields.io/badge/HTML5-%23E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-%231572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?logo=javascript&logoColor=black)

---

## 🎮 How to Play

1. Click any card to flip it over and reveal the emoji
2. Click a second card — if the two emojis **match**, they stay green and locked
3. If they **don't match**, both cards shake and flip back over
4. Try to remember where each emoji was hiding!
5. Find all **8 pairs** in as few moves as possible to get the best rating

---

## ⭐ Performance Ratings

| Moves | Rating |
|-------|--------|
| ≤ 12  | Amazing memory! 🌟 |
| ≤ 18  | Well done! 👍 |
| ≤ 24  | Good effort! 😊 |
| 25+   | Keep practicing! 💪 |

---

## ✨ Features

- 16 cards with 8 randomly shuffled emoji pairs per round
- Smooth **3D flip animations** using CSS `transform` and `perspective`
- **Shake animation** on mismatched cards
- Live **move counter** and **pairs tracker**
- **Performance rating** displayed on win
- One-click **New Game** with full reshuffle
- Fully responsive — works on mobile and desktop
- Zero dependencies — runs in any modern browser

---

## 📁 Project Structure

```
memory-game/
├── index.html   → Page structure and layout
├── style.css    → Styling, card flip animation, responsive design
├── script.js    → Game logic, shuffle, match checking
└── README.md    → You are here
```

---

## 🚀 Getting Started

### Option 1 — Open directly
Just double-click `index.html` to open it in your browser. Done!

### Option 2 — VS Code Live Server (recommended)
1. Open the `memory-game/` folder in **VS Code**
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**
4. Game runs at `http://127.0.0.1:5500`

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and card markup |
| CSS3 | 3D flip animation, layout, responsive grid |
| Vanilla JavaScript | Game logic, DOM manipulation, state management |
| Google Fonts | Fredoka One + Nunito for styling |

---

## 🧠 What I Learned (Beginner Concepts)

- DOM manipulation with `createElement`, `appendChild`, `classList`
- CSS `transform: rotateY()` and `backface-visibility` for 3D card flips
- CSS `@keyframes` for shake and pop animations
- JavaScript game state management with variables and arrays
- Using `setTimeout` to delay actions (flip-back, win screen)
- Event listeners and `data-*` attributes for card identity

---

## 🔮 Ideas for Future Improvements

- [ ] Add a countdown timer
- [ ] Add difficulty levels (4×4 Easy → 6×6 Hard)
- [ ] Save best score using `localStorage`
- [ ] Add sound effects with the Web Audio API
- [ ] Add a move history / undo button
- [ ] Dark mode support

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Emojis provided by the browser's built-in Unicode support
- Fonts from [Google Fonts](https://fonts.google.com)

---

> Made with ❤️ as a beginner JavaScript project, Alok kumar jha , student of jain global university
