import { LoaderService } from './../../Services/loader.service';
import { APIConnectionService } from 'src/app/Services/api-connection.service';
import { PurchasesService } from './../../Services/purchases.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewProductCard } from 'src/app/Interfaces/new-product-card';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  ProductDetails: NewProductCard = {} as NewProductCard;
  productId: any;
  request: any;

  constructor(
    private _purchasesService: PurchasesService,
    private _activeProduct: ActivatedRoute,
    private _apiService: APIConnectionService,
    public _loader: LoaderService
  ) {
    // Navbar counter update >>
    this.productId = this._activeProduct.snapshot.paramMap.get('id');
    this._purchasesService.getCounter().subscribe((result) => {
      this.itemCounter = result;
    });

    // Call requested product data from Api >>
    this.request = this._apiService
      .getOneProduct(this.productId)
      .subscribe((result) => {
        this.ProductDetails = result;
        console.log(result);
      });
  }

  // Purchase this item >>
  itemCounter: any;
  purchaseItem(product: NewProductCard) {
    this._purchasesService.newPurchase(product);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.request.unsubscribe();
  }
}
