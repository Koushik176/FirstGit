const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    localStorage.setItem('name', nameInput.value);
    console.log(localStorage.getItem('name'));
    localStorage.setItem('email',emailInput.value);
    console.log(localStorage.getItem('email'));
}

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#name').style.background = 'black';
    document.querySelector('#email').style.background = 'black';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#name').style.background = 'white';
    document.querySelector('#email').style.background = 'white';
});