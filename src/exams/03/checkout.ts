import { compose, map, sum } from 'ramda';
import Customer from './models/Customer';
import Cart from './models/Cart';

import IDiscountPolicy from './discount-policies/IDiscountPolicy';
import each100DollarPolicy from './discount-policies/each-100-dollar';
import percentagePerRolePolicy from './discount-policies/percentage-per-role';

// available discount policies
// strategy design pattern used here, which allows many other policies to be added & used
// each policy shares the same interface but can have its own logic
const APPLIED_DISCOUNT_POLICIES = [each100DollarPolicy, percentagePerRolePolicy];

// find & apply corresponding discount policies
// calculate total price, discount amount & net payable amount
export default (customer: Customer, cart: Cart): [number, number, number] => {
  const total_price = cart.total_price;

  const total_discount: number = compose(
    sum,
    map((policy: IDiscountPolicy): number => policy.discount(customer, cart))
  )(APPLIED_DISCOUNT_POLICIES);

  const net_price = total_price > total_discount ? total_price - total_discount : 0;

  return [total_price, total_discount, net_price];
};
