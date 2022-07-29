import { NewProductCard } from './../../Interfaces/new-product-card';
import { PurchasesService } from './../../Services/purchases.service';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/Interfaces/product-card';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss'],
})
export class ProductsCartComponent implements OnInit {
  currentCount: number = 0;
  totalValue: number = 0;

  purchasedItems: NewProductCard[] = this._purchasesService.getPurchases();

  constructor(private _purchasesService: PurchasesService) {
    this._purchasesService.getCounter().subscribe((count) => {
      this.currentCount = count;
    });
    this._purchasesService.getTotal().subscribe((total) => {
      this.totalValue = total;
    });
  }

  removeItem(index: number, quantity: number) {
    this._purchasesService.removeItem(index, quantity);
  }
  moreQuantity(index: number) {
    this._purchasesService.increment(index);
  }
  lessQuantity(index: number) {
    this._purchasesService.decrement(index);
  }
  clearCart() {
    this._purchasesService.clearPurchases();
  }

  ngOnInit(): void {
  }
}
