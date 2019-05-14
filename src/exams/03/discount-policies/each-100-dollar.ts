import DiscountPolicy from './DiscountPolicy';
import Customer from '../models/Customer';
import Cart from '../models/Cart';

const DISCOUNT_PER_EACH_100_DOLLAR = 5;

const Each100DollarPolicy: DiscountPolicy = {
  discount: (customer: Customer, cart: Cart): number => {
    const total_price: number = cart.total_price;

    return Math.floor(total_price / 100) * DISCOUNT_PER_EACH_100_DOLLAR;
  },
};

export default Each100DollarPolicy;
