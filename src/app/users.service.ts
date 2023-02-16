import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint = 'https://react-shopping-cart-67954.firebaseio.com/products.json'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getallproducts(): Observable<any> {
    return this.http.get(endpoint)
  }

}
