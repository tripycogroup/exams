export enum CustomerRole {
  employee,
  affiliate,
  loyalty_customer,
}

export default class Customer {
  private _role: CustomerRole;

  public constructor(role: CustomerRole) {
    this._role = role;
  }

  public get role(): CustomerRole {
    return this._role;
  }
}
