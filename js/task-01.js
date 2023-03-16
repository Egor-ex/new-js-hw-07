// Напиши скрипт, который выполнит следующие операции.

//1// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

//2// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const itemRef = document.querySelectorAll('.item');
console.log(itemRef);

console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach(elem => {
  const titleRef = elem.querySelector('h2');
  const listRef = elem.querySelectorAll('li');

  console.log(`-Категория: ${titleRef.textContent}`);
  console.log(`-Количество элементов: ${listRef.length}`);
});
