export enum ProductCategory {
  grocery,
  electronic,
  book,
}

export default class Product {
  private _name: string;
  private _price: number;
  private _category: ProductCategory;

  public constructor(name: string, price: number, type: ProductCategory) {
    this._name = name;
    this._price = price;
    this._category = type;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public get category(): ProductCategory {
    return this._category;
  }
}
