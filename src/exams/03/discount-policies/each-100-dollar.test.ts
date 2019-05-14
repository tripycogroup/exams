import discountPolicy from './each-100-dollar';
import Customer, { CustomerRole } from '../models/Customer';
import Product, { ProductCategory } from '../models/Product';
import Cart from '../models/Cart';

const employee = new Customer(CustomerRole['employee']);

test('check for total ~900$ bill, discount amount should be equal to 45$', () => {
  const cart = new Cart();
  cart.addItem(new Product('carrot', 1.15, ProductCategory['grocery']), 2);
  cart.addItem(new Product('smartphone', 899, ProductCategory['electronic']), 1);

  expect(discountPolicy.discount(employee, cart)).toBeCloseTo(45);
});
