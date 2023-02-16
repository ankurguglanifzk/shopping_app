import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    this.items = this.items.filter(item => item !== product);
  }
  getItems() {
    return this.items;
  }
  itemsCount() {
    return this.items.length;
  }
  getTotal() {
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
