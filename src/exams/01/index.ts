import store from './store';
import load from './load';

// program's input
const input = require('./input.json');

// play demo
export default (): void => {
  const text = store(input);
  console.log('stored:', JSON.stringify(text));

  const values = load(text);
  console.log('loaded:', values);
};
