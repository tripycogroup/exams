import discountPolicy from './percentage-per-role';
import Customer, { CustomerRole } from '../models/Customer';
import Product, { ProductCategory } from '../models/Product';
import Cart from '../models/Cart';

const employee = new Customer(CustomerRole['employee']);
const affiliate = new Customer(CustomerRole['affiliate']);
const loyalty_customer = new Customer(CustomerRole['loyalty_customer']);

test('check for total 659$ bill, with the role of employee (30% discount), discount amount should be ~197.7$', (): void => {
  const cart = new Cart();
  cart.addItem(new Product('smartphone', 659, ProductCategory['electronic']), 1);

  expect(discountPolicy.discount(employee, cart)).toBeCloseTo(197.7);
});

test('check for total 659$ bill, with the role of affiliate (10% discount), discount amount should be ~65.9$', (): void => {
  const cart = new Cart();
  cart.addItem(new Product('smartphone', 659, ProductCategory['electronic']), 1);

  expect(discountPolicy.discount(affiliate, cart)).toBeCloseTo(65.9);
});

test('check for total 659$ bill, with the role of loyalty_customer (5% discount), discount amount should be ~32.95$', (): void => {
  const cart = new Cart();
  cart.addItem(new Product('smartphone', 659, ProductCategory['electronic']), 1);

  expect(discountPolicy.discount(loyalty_customer, cart)).toBeCloseTo(32.95);
});

test('check for total 1124$ bill, with the mix of grocery product, affiliate role (10% discount policy), discount amount should be ~89.9$', (): void => {
  const cart = new Cart();
  cart.addItem(new Product('carrot', 2.25, ProductCategory['grocery']), 100);
  cart.addItem(new Product('oven', 899, ProductCategory['electronic']), 1);

  expect(discountPolicy.discount(affiliate, cart)).toBeCloseTo(89.9);
});
