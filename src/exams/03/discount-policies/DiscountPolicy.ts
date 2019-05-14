import Customer from '../models/Customer';
import Cart from '../models/Cart';

// strategy interface
export default interface DiscountPolicy {
  discount(customer: Customer, cart: Cart): number;
}
