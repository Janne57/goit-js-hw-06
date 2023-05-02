const form = document.querySelector('.login-form');
console.log(form);

const handler = (even) => {
even.preventDefault();
const {
    elements: { email, password }
} = even.currentTarget;
// console.log(even.currentTarget);


if (email.value === '' || password.value === '') {
    return alert('All fields must be filled!');
}
console.log(`Email: ${email.value}, password: ${password.value}`);
even.currentTarget.reset();
 }


form.addEventListener('submit', handler);
