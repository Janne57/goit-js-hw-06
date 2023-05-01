const countList = document.querySelectorAll("li.item");
// console.log(countList);
console.log('Number of categories: ', countList.length);

countList.forEach((element) => {
    console.log("Category: ", element.querySelector('h2').textContent);
    console.log("Elements: ", element.querySelector('ul').children.length); 
});


