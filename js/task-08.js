// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  input: document.querySelector('[type="number"]'),
  boxes: document.querySelector('div#boxes'),
};

const getNum = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getNum()}, ${getNum()}, ${getNum()})`;
};

const createBoxes = () => {
  const amount = Number(refs.input.value);
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement('div');
    newEl.style.width = `${(boxSize += 10)}px`;
    newEl.style.height = `${(boxSize += 10)}px`;
    newEl.style.backgroundColor = `${getRandomColor()}`;

    refs.boxes.append(newEl);
  }
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
};

refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);
