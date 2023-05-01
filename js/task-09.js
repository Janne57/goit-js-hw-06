function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');

const changeColor = () => {
  const col = document.querySelector('.color');
  col.textContent = getRandomHexColor();
  const bcg = document.querySelector('body');
  bcg.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click', changeColor);

