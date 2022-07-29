import { PurchasesService } from './../../Services/purchases.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _purchasesService: PurchasesService) {
    this._purchasesService.getCounter().subscribe((result: number) => {
      this.productsCount = result;
      console.log(result);
    });
  }
  productsCount: number = 0;

  ngOnInit(): void {}
}
