import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Assistance imports
import { NewProductCard } from '../Interfaces/new-product-card';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  constructor() {}

  count: number = 0;
  total: number = 0;
  purchasesCounter = new BehaviorSubject(this.count);
  totalValue = new BehaviorSubject(this.total);

  purchases: NewProductCard[] = [];

  // purchases counter > Navbar-section >>
  getCounter() {
    return this.purchasesCounter.asObservable();
  }
  setCounter() {
    this.purchasesCounter.next(++this.count);
  }
  resetCounter(quantity: number = 1) {
    this.count -= quantity;
    this.purchasesCounter.next(this.count);
  }

  // Purchases cart data > Display cart-section >>
  newPurchase(item: NewProductCard) {
    let data = this.purchases.find((e) => {
      return e.id == item.id;
    });
    if (data) {
      item.quantity!++;
    } else {
      item.quantity = 1;
      this.purchases.push(item);
      console.log(this.purchases);
    }
    this.setCounter();
    this.updateTotal();
  }
  getPurchases() {
    return this.purchases;
  }

  // Control Cart-section data >>
  clearPurchases() {
    this.total = 0;
    this.count = 1;
    this.purchases = [];
    this.resetCounter();
    this.updateTotal();
  }
  removeItem(index: number, quantity: number) {
    this.purchases.splice(index, 1);
    console.log(this.purchases);

    this.resetCounter(quantity);
    this.updateTotal();
  }
  increment(index: number) {
    this.purchases[index].quantity!++;
    this.setCounter();
    this.updateTotal();
  }
  decrement(index: number) {
    if (this.purchases[index].quantity! > 0) {
      this.purchases[index].quantity!--;
      this.resetCounter();
      this.updateTotal();
    }
  }

  // calculate total value >>
  getTotal() {
    return this.totalValue.asObservable();
  }
  updateTotal() {
    this.total = 0;
    this.purchases.forEach((obj) => {
      this.total += obj.quantity! * obj.price;
    });
    this.totalValue.next(this.total);
    console.log(this.totalValue);
  }
}
