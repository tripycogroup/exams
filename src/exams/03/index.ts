import Customer from './models/Customer';
import Cart from './models/Cart';
import checkout from './checkout';

import loadInput from './loadInput';
const input = require('./input.json');

import { toCurrency } from '../../utils';

// play demo
export default (): void => {
  // load input from file
  const [customer, cart]: [Customer, Cart] = loadInput(input);

  // checkout
  const [total, discount, net_price]: [number, number, number] = checkout(customer, cart);

  console.log('Total price:', toCurrency(total));
  console.log('Discount amount:', toCurrency(discount));
  console.log('Net price:', toCurrency(net_price));
  console.log('Items in cart:\n', cart.items);
};
