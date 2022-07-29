import { Component, OnInit } from '@angular/core';

import { NewProductCard } from 'src/app/Interfaces/new-product-card';

import { APIConnectionService } from 'src/app/Services/api-connection.service';
import { LoaderService } from './../../Services/loader.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  newProductList: Array<NewProductCard> = [];
  private apiRequest: any;

  constructor(
    private _apiService: APIConnectionService,
    public _loader: LoaderService
  ) {
    this.apiRequest = this._apiService.getProducts().subscribe((result) => {
      this.newProductList = result;
      console.log(result);
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.apiRequest.unsubscribe();
  }
}
