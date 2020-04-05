import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items;

  deleteCart() {
    this.cartService.clearCart();
    window.alert('Your products have been removed from the cart!');
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.items;
  }

}
