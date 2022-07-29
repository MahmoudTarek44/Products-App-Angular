import { Component, OnInit } from '@angular/core';

import { WishItem } from 'src/app/Interfaces/wish-item';

import { Store } from '@ngrx/store';
import { removeProductIndex } from './../../State-Store/Wishes/wishes.actions';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishList: any = [];
  counter: number = 0;

  constructor(private _store: Store<{ wishes: WishItem[] }>) {
    _store.select('wishes').subscribe((res) => {
      this.wishList = res;
      this.counter = res.length;
    });
    console.log('hello');
  }

  removeFromWish(index: number) {
    this._store.dispatch(removeProductIndex({ index }));
    console.log(this.wishList, this.wishList.length);
  }
  ngOnInit(): void {}
}
