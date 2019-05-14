import Customer, { CustomerRole } from './models/Customer';
import Product, { ProductCategory } from './models/Product';
import Cart from './models/Cart';

import checkout from './checkout';

const employee = new Customer(CustomerRole['employee']);

test('check for detail bill with mixed type of products & discount policies, result should be: []', (): void => {
  const cart = new Cart();

  cart.addItem(new Product('egg', 0.45, ProductCategory['grocery']), 8);
  cart.addItem(new Product('mango', 0.99, ProductCategory['grocery']), 2);
  cart.addItem(new Product('blender', 127.99, ProductCategory['electronic']), 1);
  cart.addItem(new Product('book1', 42, ProductCategory['book']), 1);
  cart.addItem(new Product('book2', 51, ProductCategory['book']), 1);

  const [total, discount, net] = checkout(employee, cart);

  expect(total).toBeCloseTo(226.57);
  expect(discount).toBeCloseTo(76.297);
  expect(net).toBeCloseTo(150.273);
});
