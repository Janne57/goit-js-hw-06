const textChange = document.querySelector('#text');
const textInput = document.querySelector('#font-size-control');


const handler = (even) => {
    const res = even.currentTarget.value;
    textChange.style.fontSize = `${res}px`;  
}

textInput.addEventListener("input", handler);


