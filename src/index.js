import './index.html';
import './style.css';
import { LayerList } from './LayerList';

console.log('funguju!');

// menu - zobrazení a zavření po kliku

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

// změna vzhledu na klik "Objednat" a také "Zrušit"

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

// ingredience jako komponenta
const drinkInfo = document.querySelector('.drink__info');

const drinkData = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

drinkInfo.innerHTML += LayerList({ layers: drinkData });
