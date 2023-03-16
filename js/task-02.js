const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов используй document.createElement().

////////////1

// const listRef = document.querySelector('#ingredients');

// const makeMarkupIng = ingredients.map(option => {
//   const liRef = document.createElement('li');
//   liRef.textContent = option;
//   liRef.classList.add('list-item__ing');

//   return liRef;
// });

// console.log(makeMarkupIng);
// listRef.append(...makeMarkupIng);

//////////// 2 Это юскейс!!!!

const listRef = document.querySelector('#ingredients');

const markup = ingredients
  .map(elem => `<li class="item-list__ing">${elem}</li>`)
  .join('');

listRef.insertAdjacentHTML('afterbegin', markup);

console.log(listRef);

/////////////////////3 функция по создаию разметки

// const itemRef = document.querySelector('#ingredients');

// const makeMarkupIng = option => {
//   return option.map(option => {
//     const liRef = document.createElement('li');
//     liRef.textContent = option;
//     liRef.classList.add('list-item__ing');

//     return liRef;
//   });
// };

// const elements = makeMarkupIng(ingredients);
// itemRef.append(...elements); //добавление + распыление
