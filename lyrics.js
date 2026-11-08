const lineEl = document.getElementById('random-line');
const sourceEl = document.getElementById('random-source');
const button = document.getElementById('randomize');

const lines = [...document.querySelectorAll('.line-item')].map(item => ({
  text: item.querySelector('p').textContent.trim(),
  source: item.querySelector('span').textContent.trim()
}));

function showRandomLine() {
  const pool = lines.filter(item => item.text !== lineEl.textContent.trim());
  if (pool.length === 0) return;

  const pick = pool[Math.floor(Math.random() * pool.length)];
  lineEl.textContent = pick.text;
  sourceEl.textContent = pick.source;
}

button.addEventListener('click', showRandomLine);
