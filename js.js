const btn = document.getElementById('action');
const p = document.getElementById('real');

const Things = () => {
  p.classList.toggle('real');
};

btn.addEventListener('click', Things);
