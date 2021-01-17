// // Задание 5
// // Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// {
//   /* < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
// }

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.getElementById("name-input");
const captionRef = document.querySelector("h1 > span");
inputRef.addEventListener("input", (event) => {
  if (event.target.value.length === 0) {
    captionRef.textContent = "незнакомец";
  } else captionRef.textContent = event.target.value;
});

// function slugify(title) {
//   // Пиши код ниже этой строки
//   const slug = title.toLowerCase().split(" ").join("-");
//   console.log(title);
//   return slug;

//   // Пиши код выше этой строки
// }

// console.log(slugify("Массивы для новичков"));
