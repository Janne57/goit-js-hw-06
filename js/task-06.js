const text = document.querySelector('#validation-input');
const textLengthMain = Number(text.getAttribute('data-length'));


const control = () => {
    const textLength = text.value.trim().length;
    text.classList.add('invalid');

    if (textLengthMain == textLength) {
         text.classList.replace('invalid', 'valid');
}};

text.addEventListener('blur', control);
