
// const textInput = document.querySelector('')
// document.addEventListener=("keydown", event => {
//     console.log('key', event);
    
// });

const textIn = document.querySelector('#name-input');
const textOut = document.querySelector('#name-output');
textIn.addEventListener('input', (event) => {
    
    event.preventDefault();
    textOut.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        textOut.textContent = 'Anonymous';
    }
    });

