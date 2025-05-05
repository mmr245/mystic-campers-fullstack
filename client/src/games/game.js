export function initGame(root) {
  const words = [
    { word: "oracle", hint: "A mystical prophet who foresees the future." },
    { word: "crystal", hint: "A gemstone often used in mystical practices." },
    { word: "spirit", hint: "An unseen mystical essence or ghost." },
    { word: "moon", hint: "A celestial body associated with magic and mystery." },
    { word: "enchant", hint: "To cast a spell or charm." },
    { word: "amulet", hint: "A magical charm worn for protection." },
    { word: "alchemy", hint: "Ancient mystical science of transforming matter." },
    { word: "spell", hint: "A magical word or phrase." },
    { word: "conjuration", hint: "The act or process of summoning a spirit by magic." },
    { word: "incantation", hint: "A chant or formula of words spoken or sung as a magical charm." },
    { word: "necromancy", hint: "The practice of communicating with the dead to predict the future." },
    { word: "clairvoyance", hint: "The ability to perceive events beyond normal sensory contact." },
    { word: "divination", hint: "The art of foretelling future events by interpreting omens." },
    { word: "telekinesis", hint: "The supposed psychic power to move objects at a distance." },
    { word: "enchantment", hint: "A magical spell that captivates or bewitches the mind." },
    { word: "transmutation", hint: "The alchemical process of changing one substance into another." },
    { word: "transfiguration", hint: "The act of magically changing one’s form or appearance." },
    { word: "manifestation", hint: "The act of something materializing or appearing in reality." },
    { word: "rune", hint: "A symbol believed to hold magical power." },
    { word: "potion", hint: "A liquid mixture used in magical rituals." },
    { word: "talisman", hint: "An object believed to bring good luck or protection." },
    { word: "phoenix", hint: "A mythical bird that is reborn from its ashes." },
    { word: "dragon", hint: "A legendary fire-breathing reptile." },
    { word: "coven", hint: "A gathering of witches." },
    { word: "wizard", hint: "A practitioner of magic, often wise and old." },
    { word: "cauldron", hint: "A large pot used by witches to brew potions." },
    { word: "sigil", hint: "A magical symbol believed to attract power." },
    { word: "arcane", hint: "Known or understood by only a few; mysterious." },
    { word: "mystic", hint: "Someone who seeks hidden spiritual truths." },
    { word: "astral", hint: "Relating to the stars or spiritual realms." }
  ];

  let selectedWord = "";
  let currentHint = "";
  let guessedLetters = [];
  let remainingAttempts = 6;

  const wordDiv       = root.querySelector("#word");
  const attemptsDiv   = root.querySelector("#attempts");
  const guessedDiv    = root.querySelector("#letters-guessed");
  const hintDiv       = root.querySelector("#hint");
  const messageDiv    = root.querySelector("#message");
  const hintBtn       = root.querySelector("#hint-btn");
  const newGameBtn    = root.querySelector("#new-game-btn");
  const guessWordBtn  = root.querySelector("#guess-word-btn");
  const mysticImage   = root.querySelector("#hangman-image");
  const letterBankDiv = root.querySelector("#letter-bank");
  const fullWordInput = root.querySelector("#full-word-input");

  function startGame() {
    const index = Math.floor(Math.random() * words.length);
    selectedWord     = words[index].word;
    currentHint      = words[index].hint;
    guessedLetters   = [];
    remainingAttempts = 6;
    messageDiv.textContent = "";

    hintDiv.style.display = "none";
    hintDiv.textContent     = "";
    hintBtn.disabled        = false;
    fullWordInput.value     = "";
    guessWordBtn.disabled   = false;

    updateDisplay();
  }

  hintBtn.addEventListener("click", () => {
    hintDiv.style.display  = "block";
    hintDiv.textContent    = "Hint: " + currentHint;
    hintBtn.disabled       = true;
  });

  function updateDisplay() {
    let displayWord = "";
    for (let ch of selectedWord) {
      displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
    }
    wordDiv.textContent     = displayWord.trim();
    attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
    guessedDiv.textContent  = "Letters guessed: " + guessedLetters.join(", ");
    updateImage();
    updateLetterBank();
  }

  function updateImage() {
    const stage = 6 - remainingAttempts;
    mysticImage.src = '/assets/images/hangman/hangman-' + stage + '.png';
  }

  function updateLetterBank() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let html = "";
    for (let ch of alphabet) {
      const lowerCh = ch.toLowerCase();
      if (guessedLetters.includes(lowerCh)) {
        html += `<span class="guessed">${ch}</span>`;
      } else {
        html += `<span onclick="guessLetter('${lowerCh}')">${ch}</span>`;
      }
    }
    letterBankDiv.innerHTML = html;
  }

  function guessLetter(letter) {
    if (remainingAttempts <= 0 || isWin()) return;
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!selectedWord.includes(letter)) {
        remainingAttempts--;
      }
      updateDisplay();
      checkGameStatus();
    }
  }

  // expose for inline onclicks
  window.guessLetter = guessLetter;

  function handleFullWordGuess() {
    const guess = fullWordInput.value.trim().toLowerCase();
    fullWordInput.value = "";

    if (!guess) {
      alert("Please enter your full word guess.");
      return;
    }

    if (guess === selectedWord) {
      guessedLetters = selectedWord.split("");
      updateDisplay();
      messageDiv.textContent = "✨ You guessed the word! ✨";
      endGameCleanup();
    } else {
      remainingAttempts = 0;
      updateDisplay();
      messageDiv.textContent = `☠️ Wrong! The word was: ${selectedWord}`;
      endGameCleanup();
    }
  }

  function checkGameStatus() {
    if (isWin()) {
      messageDiv.textContent = "✨ You found the mystic word! ✨";
    } else if (remainingAttempts === 0) {
      messageDiv.textContent = "☠️ The spirits have forsaken you! Word was: " + selectedWord;
    }
  }

  function isWin() {
    return selectedWord.split("").every((ch) => guessedLetters.includes(ch));
  }

  function endGameCleanup() {
    guessWordBtn.disabled = true;
    fullWordInput.disabled = true;
    letterBankDiv.querySelectorAll("span").forEach((el) => {
      el.style.pointerEvents = "none";
      el.style.opacity       = "0.5";
    });
  }

  // wire up events
  newGameBtn.addEventListener("click", startGame);
  guessWordBtn.addEventListener("click", handleFullWordGuess);
  fullWordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleFullWordGuess();
  });

  // start first game
  startGame();
}