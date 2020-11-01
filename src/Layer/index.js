import './style.css';

export const Layer = ({ color, label }) => {
  return `<div class="layer">
  <div class="layer__color" style="background-color: ${color}"></div>
<div class="layer__label">${label}</div>
</div>`;
};
