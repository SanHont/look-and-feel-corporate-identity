let contactForm = document.querySelector(".vragen-formulier")
let buttonForm = document.querySelector(".display-vragen-formulier")
console.log(buttonForm)

buttonForm.addEventListener('click', displayForm)

function displayForm() {
    contactForm.classList.add('vragen-formulier-display')
    buttonForm.classList.add('undisplay-vragen-formulier')
}