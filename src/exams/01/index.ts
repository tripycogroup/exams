import store from './store';
import load from './load';

// program's input
import input from './input.json';

// play demo
export default (): void => {
  const text = store(input);
  console.log('stored:', JSON.stringify(text));

  const values = load(text);
  console.log('loaded:', values);
};
