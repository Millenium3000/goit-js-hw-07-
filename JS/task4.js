// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const decrementBtnRef = document.querySelector("div > button:first-child");
const incrementBtnRef = document.querySelector("div > button:last-child");
const spanRef = document.getElementById("value");
decrementBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});
incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});

//разобраться

// let counterValue = 0;
// const incrementRef = document
//   .getElementById("increment")
//   .addEventListener("click", function () {
//     counterValue++;
//     document.getElementById("value").textContent = counterValue.toString();
//   });

// const decrementRef = document
//   .getElementById("decrement")
//   .addEventListener("click", function () {
//     counterValue--;
//     document.getElementById("value").textContent = counterValue.toString();
//   });

//альтернативное решение
// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   document.getElementById('value').textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   document.getElementById('value').textContent = counterValue;
// };
