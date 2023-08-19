const burger = document.querySelector('.burger')
const burgeLine1 = document.querySelector('.line1')
const burgeLine2 = document.querySelector('.line2')
const burgeLine3 = document.querySelector('.line3')
const menu = document.querySelector('.nav')

burger.addEventListener('click', function() {
    menu.classList.toggle('nav--active')
    burgeLine1.classList.toggle('burger_line1--active')
    burgeLine2.classList.toggle('burger_line2--active')
    burgeLine3.classList.toggle('burger_line3--active')
})