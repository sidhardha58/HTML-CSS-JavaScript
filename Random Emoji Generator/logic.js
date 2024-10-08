// Array of many emojis
const emojis = [
  "😀",
  "😂",
  "😍",
  "😎",
  "🤣",
  "😱",
  "🦁",
  "🧀",
  "🚀",
  "👻",
  "🎉",
  "🍕",
  "🍩",
  "🐶",
  "🐱",
  "🦊",
  "🐼",
  "🐧",
  "🦄",
  "🐢",
  "🐞",
  "🌍",
  "🌟",
  "🔥",
  "🌈",
  "❄️",
  "🌊",
  "☀️",
  "🎈",
  "🎁",
  "🎂",
  "📚",
  "🎧",
  "💻",
  "📱",
  "🏆",
  "⚽️",
  "🏀",
  "🏓",
  "🎮",
  "🎸",
  "🥁",
  "🎻",
  "🎷",
  "🎺",
  "🏖️",
  "🏔️",
  "🚴‍♂️",
];

// Function to generate and display a random emoji
function generateEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  document.getElementById("emojiDisplay").textContent = emojis[randomIndex];
}
