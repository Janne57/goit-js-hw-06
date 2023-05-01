let counterValue = 0;

const buttons = document.querySelector('.button');
const addListenerBtn = document.querySelector('[data-action="decrement"]');
const removeListenerBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

const handleClickIncrement = () => {
    return () => (counterValue += 1); 
}

const handleClickDecrement = () => {
    return () => (counterValue -= 1); 
}

const counterIncr = handleClickIncrement();
const counterDecr = handleClickDecrement();


removeListenerBtn.addEventListener('click', function () {
    const res = document.querySelector('#value');
    res.textContent = counterIncr();
    
});


addListenerBtn.addEventListener('click', function () {
    const res = document.querySelector('#value');
    res.textContent = counterDecr();
    
});

