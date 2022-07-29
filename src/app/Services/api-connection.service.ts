import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIConnectionService {
  constructor(private _httpClient: HttpClient) {}

  // call API to get data >>
  getProducts(): Observable<any> {
    return this._httpClient.get(`https://api.escuelajs.co/api/v1/products`);
  }
  getOneProduct(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
