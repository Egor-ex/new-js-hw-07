// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const targetBtnIncrem = document.querySelector('[data-action="increment"]');
const tragetBtnDecrem = document.querySelector('[data-action="decrement"]');
const spanText = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanText.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanText.textContent = counterValue;
};

targetBtnIncrem.addEventListener('click', increment);

tragetBtnDecrem.addEventListener('click', decrement);
