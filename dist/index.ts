const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
const display = document.querySelector('.screens')
 
function addNumbers(a: number, b: number) {
     display.innerHTML = (a + b).toString()
}
 
button.addEventListener('click', () => 
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))
 