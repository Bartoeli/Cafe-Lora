import 'style.css';
import { Layer } from '../Layer/';

export const LayerList = (props) => {
  let result = '';
  for (let i = 0; i < props.layers.length; i++) {
    result += Layer(props.layers[i]);
  }
  return result;
};
