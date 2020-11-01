import './style.css';
import { LayerList } from '../LayerList';

export const Drink = (props) => {
  const drink = document.createElement('div');
  drink.className = 'drink';

  drink.innerHTML = `<div class="drink__product">
 <div class="drink__cup">
   <img src="/assets/cups/${props.id}.png" />
 </div>
 <div class="drink__info">
   <h3>${props.name}</h3>
   ${LayerList({ layers: props.layers })}
 </div>
</div>
<div class="drink__controls">
 <button class="order-btn">Objednat</button>
</div>`;

  const orderBtn = drink.querySelector('.order-btn');
  const drinkImg = drink.querySelector('.drink__cup');
  orderBtn.addEventListener('click', () => {
    if (props.ordered === false) {
      drinkImg.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
      props.ordered = true;
    } else if (props.ordered === true) {
      drinkImg.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
      props.ordered = false;
    }
  });

  return drink;
};
