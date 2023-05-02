const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let arr =[];
ingredients.forEach((element) => { 
  const elementEl = document.createElement("li");
console.log(elementEl.textContent = element);
elementEl.classList.add("item");
arr.push(elementEl);


});

list.append(...arr);