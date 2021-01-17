// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("change", inputValidation);
function inputValidation(event) {
  // длина инпута символов в нем
  const lengthInput = event.target.value.length;
  const dataSet = event.target.dataset.length; // тут строка
  console.log(lengthInput);
  console.log(dataSet);
  if (lengthInput === Number(dataSet)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.
