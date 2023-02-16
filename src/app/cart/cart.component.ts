import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  total = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.updateTotal();
  }
  updateTotal() {
    this.total = 0;
    this.items.forEach(item => {
      this.total += item.price;
      if (!item.isFreeShipping) {
        this.total += 5;
      }
    });
  }
  addtoCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    window.alert('Your product has been removed from the cart!');
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.updateTotal();
  }
}
