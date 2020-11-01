import './index.html';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('#nav');
const navItem = document.querySelectorAll('#navItem');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navItem.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});

const orderBtn = document.querySelector('.order-btn');
const drinkImg = document.querySelector('.drink__cup');

let ordered = false;

orderBtn.addEventListener('click', () => {
  if (ordered === false) {
    drinkImg.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    ordered = true;
  } else if (ordered === true) {
    drinkImg.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
});
