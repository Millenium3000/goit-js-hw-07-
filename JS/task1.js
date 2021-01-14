const itemsRef = [...document.querySelectorAll("li.item")];

console.log(`В списке ${itemsRef.length} категории`);

const itemsList = itemsRef.forEach((item) => {
  const textH2 = item.querySelector("h2");

  const textUl = item.querySelectorAll("li");

  console.log(`Категория ${textH2.textContent} `);
  console.log(`количество элементов: ${textUl.length} `);
});
