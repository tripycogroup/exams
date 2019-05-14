import { compose, filter, map, sum } from 'ramda';
import IDiscountPolicy from './IDiscountPolicy';
import Customer, { CustomerRole } from '../models/Customer';
import { ProductCategory } from '../models/Product';
import Cart, { PlainCartItem } from '../models/Cart';

const DISCOUNT_PERCENTAGE_PER_ROLE = {
  [CustomerRole['employee']]: 0.3,
  [CustomerRole['affiliate']]: 0.1,
  [CustomerRole['loyalty_customer']]: 0.05,
};

const PercentagePerRole: IDiscountPolicy = {
  discount: (customer: Customer, cart: Cart): number => {
    const customer_role = customer.role;
    const items = cart.items;
    const discount_percentage = DISCOUNT_PERCENTAGE_PER_ROLE[customer_role];

    // filter out any grocery products
    const non_grocery_items = filter(({ category }): boolean => category !== ProductCategory['grocery'])(
      items
    ) as PlainCartItem[];

    // calculate discount amount
    const discount = compose(
      sum,
      map(({ price, quantity }): number => discount_percentage * price * quantity)
    )(non_grocery_items);

    return discount;
  },
};

export default PercentagePerRole;
