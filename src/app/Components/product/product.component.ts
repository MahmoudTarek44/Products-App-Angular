import { WishItem } from 'src/app/Interfaces/wish-item';
import { NewProductCard } from './../../Interfaces/new-product-card';
import { PurchasesService } from './../../Services/purchases.service';

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addProduct,
  removeProductId,
} from 'src/app/State-Store/Wishes/wishes.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;

  itemCounter: number = 0;
  wishStatus: boolean = false;

  constructor(
    private _purchasesService: PurchasesService,
    private _store: Store<{ wishes: WishItem[] }>
  ) {
    this._purchasesService.getCounter().subscribe((result) => {
      this.itemCounter = result;
    });
  }
  // Add item to cart
  purchaseItem(product: NewProductCard) {
    this._purchasesService.newPurchase(product);
  }

  // Wish a new item >>
  wishItem(element: any, image: string, title: string, id: number) {
    if (this.wishStatus) {
      this._store.dispatch(removeProductId({ id }));
      this.wishStatus = false;
    } else {
      this._store.dispatch(addProduct({ image: image, title: title, id: id }));
      this.wishStatus = true;
    }
  }
  ngOnInit(): void {}
}
