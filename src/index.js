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
