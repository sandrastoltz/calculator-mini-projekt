const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const display = document.querySelector('.screens');
function addNumbers(a, b) {
    display.innerHTML = (a + b).toString();
}
button.addEventListener('click', () => addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)));
