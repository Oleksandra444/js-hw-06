
const counter = document.querySelector('#counter');
const valueCounter = document.querySelector('#value');

const decrementBtn = counter.querySelector('[data-action = "decrement"]');
const incrementBtn = counter.querySelector('[data-action = "increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueCounter.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueCounter.textContent = counterValue;
});