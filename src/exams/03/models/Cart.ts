import { compose, map, sum } from 'ramda';
import Product, { ProductCategory } from './Product';

interface CartItem {
  product: Product;
  quantity: number;
}

export interface PlainCartItem {
  name: string;
  category: ProductCategory;
  price: number;
  quantity: number;
}

export default class Cart {
  private _items: CartItem[];

  public constructor() {
    this._items = [];
  }

  public addItem(product: Product, quantity: number): void {
    const new_item = { product, quantity };
    this._items = [...this._items, new_item];
  }

  public get items(): PlainCartItem[] {
    const items = map(
      ({ product, quantity }): PlainCartItem => ({
        name: product.name,
        category: product.category,
        price: product.price,
        quantity,
      })
    )(this._items);

    return items;
  }

  public get total_price(): number {
    const items: PlainCartItem[] = this.items;
    const total_price: number = compose(
      sum,
      map(({ price, quantity }): number => price * quantity)
    )(items);

    return total_price;
  }
}
