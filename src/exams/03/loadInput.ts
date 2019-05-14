import { path, props } from 'ramda';

import Customer, { CustomerRole } from './models/Customer';
import Product, { ProductCategory } from './models/Product';
import Cart from './models/Cart';

interface CustomerInput {
  role: string;
}

interface ItemInput {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface Input {
  customer: CustomerInput;
  items: ItemInput[];
}

// load input from JSON structure
// return customer & cart object
export default (input: Input): [Customer, Cart] => {
  const role = path(['customer', 'role'], input) as keyof typeof CustomerRole;

  const customer: Customer = new Customer(CustomerRole[role]);
  const cart: Cart = new Cart();

  const items_input: ItemInput[] = path(['items'], input);
  for (const item of items_input) {
    const [name, price, quantity] = props(['name', 'price', 'quantity'], item);
    const category = path(['category'], item) as keyof typeof ProductCategory;

    const product: Product = new Product(name as string, price as number, ProductCategory[category]);

    cart.addItem(product, quantity as number);
  }

  return [customer, cart];
};
