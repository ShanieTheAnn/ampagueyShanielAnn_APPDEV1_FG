import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CART } from '../shared/cart-data';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems = CART;
  total = 0;

  products = [
    {id: 1, name: "Red Paint", price: 100, stock: 100},
    {id: 2, name: "Blue Paint", price: 100, stock: 0},
    {id: 3, name: "Green Paint", price: 100, stock: 58},
    {id: 4, name: "Invisible Paint", price: 10, stock: 75}
  ];
  

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

   clearCart() {
    this.cartItems.length = 0;

    this.calculateTotal();
  }
}