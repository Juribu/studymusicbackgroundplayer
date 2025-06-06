// This script handles the button interactions for a music selection interface.
const buttons = [
  { id: 'genre-btn', base: 'Genre' },
  { id: 'mood-btn', base: 'Mood' },
  { id: 'customize-btn', base: 'Customize' }
];

let currentFilled = null;

buttons.forEach(({ id, base }) => {
  const btn = document.getElementById(id);
  const img = btn.querySelector('img');

  btn.addEventListener('click', () => {
    const isAlreadyFilled = currentFilled === id;

    // Reset all buttons to unfilled
    buttons.forEach(({ id: otherId, base: otherBase }) => {
      const otherImg = document.getElementById(otherId).querySelector('img');
      otherImg.src = `assets/icons/${otherBase}.svg`;
    });

    // Toggle: if not already filled, fill it
    if (!isAlreadyFilled) {
      img.src = `assets/icons/${base}-filled.svg`;
      currentFilled = id;
    } else {
      currentFilled = null; // no button selected
    }
  });
});

const playBtn = document.getElementById('play-btn');
const playImg = playBtn.querySelector('img');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playImg.src = `assets/icons/${isPlaying ? 'Pause-Button' : 'Play-Button'}.svg`;
});