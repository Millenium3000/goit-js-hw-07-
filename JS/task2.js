const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ulRef = document.querySelector("#ingredients");
// console.log(ulRef);

const newArr = ingredients.map((element) => {
  // console.log(element);
  const newList = document.createElement("li");
  // console.log(newList);
  newList.append(element);
  // console.log(newList);
  return newList;
});

ulRef.append(...newArr);
console.log(ulRef);
