import './index.html';
import './style.css';
import { LayerList } from './LayerList';
import { Drink } from './Drink';

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

// ingredience jako komponenta
const drinkInfo = document.querySelector('.drink__info');

const drinkData = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinkList = document.querySelector('.drinks-list');
drinks.forEach((drink) => {
  drinkList.appendChild(Drink(drink));
});
