let body = document.querySelector('body')
let opacityPattern = document.querySelector('.opacity-pattern')
let modal = document.querySelector('.modal')
let modalButton = document.querySelector('.modal-button')
let products = document.querySelectorAll('.card-product')
let donateButtons = document.querySelectorAll('.card-product-footer-button')

donateButtons.forEach(e => e.addEventListener('click', () => {
    if(e.classList.contains('disable')) return
    body.classList.add('modal')
    opacityPattern.classList.remove('none')
    modal.classList.remove('none')
}))

modalButton.addEventListener('click', () => {
    body.classList.remove('modal')
    opacityPattern.classList.add('none')
    modal.classList.add('none')
})