const group = document.querySelector('.dice-group');
const button = document.querySelector('.throw');
const total = document.querySelector('.total');
const number = document.querySelector('.dice-number');

const mapping = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

const throwDice = function () {
  const num = parseInt(number.value);
  let html = [];
  let totalDots = 0;

  for (let i = 0; i < num; i++) {
    let dots = parseInt(Math.random() * 6);
    html.push(`<span class="dice" data-dots="${dots + 1}">${mapping[dots]}</span>`);
    totalDots += dots + 1;
  }

  group.innerHTML = html.join('');
  total.innerHTML = totalDots;

}

button.addEventListener('click', throwDice);

throwDice();
