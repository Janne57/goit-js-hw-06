const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((element) => { 
  const elementEl = document.createElement("li");
console.log(elementEl.textContent = element);
elementEl.classList.add("item");
const list = document.querySelector("#ingredients");
list.append(elementEl);
});

